import { FC, useState, ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './NutritionPlanner.css';
import { Section, IntroSection, Card, Input, Button, Grid } from './UI';
import { REDUX_ACTIONS } from '../store/index.ts';
import { RootState } from '../store/index.ts';

// Mifflin-St Jeor BMR calculation
const calculateBMR = (weight: number, height: number, age: number, gender: string): number =>
  gender === 'M'
    ? 10 * weight + 6.25 * height - 5 * age + 5
    : 10 * weight + 6.25 * height - 5 * age - 161;

// TDEE calculation based on activity level
const calculateTDEE = (bmr: number, activityLevel: string): number => {
  const activities: Record<string, number> = { sedentary: 1.2, light: 1.375, moderate: 1.55, active: 1.725, veryactive: 1.9 };
  return bmr * (activities[activityLevel] || 1.55);
};

// Validate nutrition form inputs
const validateNutritionForm = (weight: string | number, height: string | number, age: string | number): { valid: boolean; message: string } => {
  if (!weight || !height || !age) return { valid: false, message: 'Please fill in all fields' };
  if (weight <= 0 || height <= 0 || age <= 0) return { valid: false, message: 'Values must be positive numbers' };
  if (age < 10 || age > 120) return { valid: false, message: 'Age should be between 10 and 120' };
  return { valid: true, message: '' };
};

// Render macro card with label, value, and percentage
interface MacroCardProps {
  emoji: string;
  label: string;
  value: number;
  percentage: number;
  type: 'protein' | 'carbs' | 'fats';
}

const MacroCard: FC<MacroCardProps> = ({ emoji, label, value, percentage, type }) => (
  <div className={`macro-card macro-${type}`}>
    <p>{emoji} {label}</p>
    <p>{value}g</p>
    <p>{percentage}% of calories</p>
  </div>
);

const NutritionPlanner: FC = () => {
    const dispatch = useDispatch();
    const nutrition = useSelector((state: RootState) => state.nutrition);

    // Step 1: Basic Info
    const [currentStats, setCurrentStats] = useState(nutrition?.currentStats || {
        weight: '',
        height: '',
        age: '',
        gender: 'M',
        activity: 'moderate'
    });

    // Step 2: Goals
    const [goalStats, setGoalStats] = useState(nutrition?.goalStats || {
        desiredWeight: '',
        timeframe: '21days' // 'weekly', 'monthly', '21days'
    });

    const [tdee, setTdee] = useState(nutrition?.tdee || null);
    const [macroResults, setMacroResults] = useState(nutrition?.macroResults || null);
    const [error, setError] = useState("");

    // Calculate TDEE
    const handleCalculateTDEE = () => {
        const validation = validateNutritionForm(currentStats.weight, currentStats.height, currentStats.age);
        if (!validation.valid) {
            setError(validation.message);
            return;
        }
        setError("");

        const bmr = calculateBMR(
            parseFloat(currentStats.weight),
            parseFloat(currentStats.height),
            parseFloat(currentStats.age),
            currentStats.gender
        );
        const calculatedTdee = calculateTDEE(bmr, currentStats.activity);
        setTdee(calculatedTdee);

        dispatch({
            type: REDUX_ACTIONS.UPDATE_NUTRITION,
            payload: { currentStats, tdee: calculatedTdee }
        });
    };

    // Calculate Macros and Deficit/Surplus
    const handleCalculateMacros = () => {
        if (!tdee || !goalStats.desiredWeight) {
            setError("Please fill in all fields");
            return;
        }

        const weightDiff = parseFloat(goalStats.desiredWeight) - parseFloat(currentStats.weight);
        let duration = 21; // days

        if (goalStats.timeframe === 'weekly') {
            duration = 7;
        } else if (goalStats.timeframe === 'monthly') {
            duration = 30;
        }

        // Calculate daily deficit/surplus (0.5kg = 3500 calories)
        const totalCalorieChange = weightDiff * 3500;
        const dailyCalorieChange = Math.round(totalCalorieChange / duration);
        const targetCalories = tdee + dailyCalorieChange;

        // Calculate macros based on goal
        const isLosing = weightDiff < 0;
        const proteinGrams = Math.round(parseFloat(currentStats.weight) * (isLosing ? 2.2 : 1.8)); // Higher protein for loss
        const carbsGrams = Math.round((targetCalories * 0.45) / 4);
        const fatsGrams = Math.round((targetCalories * 0.25) / 9);

        const results = {
            currentWeight: parseFloat(currentStats.weight),
            desiredWeight: parseFloat(goalStats.desiredWeight),
            weightDifference: weightDiff,
            duration,
            timeframeLabel: goalStats.timeframe === 'weekly' ? 'Week' : goalStats.timeframe === 'monthly' ? 'Month' : '21 Days',
            tdee,
            dailyCalorieChange,
            targetCalories,
            isWeightLoss: isLosing,
            protein: proteinGrams,
            carbs: carbsGrams,
            fats: fatsGrams
        };

        setMacroResults(results);
        setError("");

        dispatch({
            type: REDUX_ACTIONS.UPDATE_NUTRITION,
            payload: { currentStats, goalStats, tdee, macroResults: results }
        });
    };

    const handleCurrentStatChange = (e) => {
        const { name, value } = e.target;
        setCurrentStats(prev => ({ ...prev, [name]: value }));
    };

    const handleGoalChange = (e) => {
        const { name, value } = e.target;
        setGoalStats(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="nutrition-planner">
            <IntroSection 
                title="🥗 Nutrition Planner"
                subtitle="Create a personalized nutrition plan based on your goals"
                variant="gradient"
            />

            {/* Step 1: Personal Information & TDEE */}
            <Section title="📋 Step 1: Your Information" subtitle="Enter your basic stats to calculate daily calorie needs">
                <Card variant="elevated" className="step-card">
                    <div className="stats-input-grid">
                        <Input
                            label="Current Weight (kg)"
                            name="weight"
                            value={currentStats.weight}
                            onChange={handleCurrentStatChange}
                            type="number"
                            placeholder="70"
                        />
                        <Input
                            label="Height (cm)"
                            name="height"
                            value={currentStats.height}
                            onChange={handleCurrentStatChange}
                            type="number"
                            placeholder="175"
                        />
                        <Input
                            label="Age (years)"
                            name="age"
                            value={currentStats.age}
                            onChange={handleCurrentStatChange}
                            type="number"
                            placeholder="25"
                        />
                    </div>

                    <div className="form-controls-grid">
                        <div className="form-select-group">
                            <label>Gender</label>
                            <select 
                                name="gender" 
                                value={currentStats.gender} 
                                onChange={handleCurrentStatChange}
                            >
                                <option value="M">Male ♂️</option>
                                <option value="F">Female ♀️</option>
                            </select>
                        </div>
                        <div className="form-select-group">
                            <label>Activity Level</label>
                            <select 
                                name="activity" 
                                value={currentStats.activity} 
                                onChange={handleCurrentStatChange}
                            >
                                <option value="sedentary">🪑 Very Low (Desk Job)</option>
                                <option value="light">🚶 Low (Light Activity)</option>
                                <option value="moderate">🏃 Moderate (Regular Exercise)</option>
                                <option value="active">💪 High (Intense Training)</option>
                                <option value="veryActive">🏋️ Very High (Athlete)</option>
                            </select>
                        </div>
                    </div>

                    {error && <p className="form-error">⚠️ {error}</p>}

                    <Button onClick={handleCalculateTDEE} variant="primary" className="full-width-button">
                        Calculate Daily Calorie Needs (TDEE)
                    </Button>

                    {tdee && (
                        <div className="tdee-result">
                            <p className="result-stat-header">Your Daily Calorie Needs:</p>
                            <p className="tdee-value">{tdee} kcal</p>
                            <p className="result-stat-subtext">This is how much you need to maintain your current weight</p>
                        </div>
                    )}
                </Card>
            </Section>

            {/* Step 2: Weight Goals */}
            {tdee && (
                <Section title="🎯 Step 2: Your Weight Goal" subtitle="Set your target weight and timeframe">
                <Card variant="elevated" className="goal-card">
                        <div className="goal-inputs-grid">
                            <Input
                                label="Desired Weight (kg)"
                                name="desiredWeight"
                                value={goalStats.desiredWeight}
                                onChange={handleGoalChange}
                                type="number"
                                placeholder={currentStats.weight}
                            />
                            <div className="form-select-group">
                                <label>Achieve Goal In</label>
                                <select 
                                    name="timeframe" 
                                    value={goalStats.timeframe} 
                                    onChange={handleGoalChange}
                                >
                                    <option value="weekly">1 Week</option>
                                    <option value="monthly">1 Month</option>
                                    <option value="21days">21 Days</option>
                                </select>
                            </div>
                        </div>

                        <Button onClick={handleCalculateMacros} variant="primary" className="full-width-button">
                            Generate Nutrition Plan
                        </Button>
                    </Card>
                </Section>
            )}

            {/* Step 3: Macro Breakdown */}
            {macroResults && (
                <Section title="📊 Step 3: Your Personalized Nutrition Plan" subtitle="Daily macronutrient targets for your goal">
                    <Grid columns={2} gap="16px" style={{ marginBottom: '24px' }}>
                        <Card variant="elevated">
                            <div className="result-stat-card">
                                <p className="result-stat-header">Weight Change</p>
                                <p className={`result-stat-value ${macroResults.isWeightLoss ? 'stat-value-loss' : 'stat-value-gain'}`}>
                                    {macroResults.isWeightLoss ? '📉' : '📈'} {Math.abs(macroResults.weightDifference).toFixed(1)} kg
                                </p>
                                <p className="result-stat-subtext">
                                    {macroResults.currentWeight}kg → {macroResults.desiredWeight}kg
                                </p>
                            </div>
                        </Card>

                        <Card variant="elevated">
                            <div className="result-stat-card">
                                <p className="result-stat-header">Daily Calorie Adjustment</p>
                                <p className={`result-stat-value ${macroResults.isWeightLoss ? 'stat-value-loss' : 'stat-value-gain'}`}>
                                    {macroResults.dailyCalorieChange < 0 ? '−' : '+'}{Math.abs(macroResults.dailyCalorieChange)} kcal
                                </p>
                                <p className="result-stat-subtext">
                                    {macroResults.isWeightLoss ? 'Deficit' : 'Surplus'} per day
                                </p>
                            </div>
                        </Card>

                        <Card variant="elevated">
                            <div className="result-stat-card">
                                <p className="result-stat-header">Target Daily Calories</p>
                                <p className="result-stat-value-large">
                                    {macroResults.targetCalories}
                                </p>
                                <p className="result-stat-subtext">kcal per day</p>
                            </div>
                        </Card>

                        <Card variant="elevated">
                            <div className="result-stat-card">
                                <p className="result-stat-header">Timeline</p>
                                <p className="result-stat-value-calories">
                                    {macroResults.duration} days
                                </p>
                                <p className="result-stat-subtext">
                                    {macroResults.timeframeLabel}
                                </p>
                            </div>
                        </Card>
                    </Grid>

                    {/* Macro Breakdown */}
                    <Card variant="outline" style={{ padding: '24px' }}>
                        <h3 className="macro-targets-title">🥗 Daily Macronutrient Targets</h3>
                        <Grid columns={3} gap="16px">
                            <MacroCard emoji="💪" label="Protein" value={macroResults.protein} type="protein" percentage={Math.round((macroResults.protein * 4) / macroResults.targetCalories * 100)} />
                            <MacroCard emoji="🌾" label="Carbs" value={macroResults.carbs} type="carbs" percentage={Math.round((macroResults.carbs * 4) / macroResults.targetCalories * 100)} />
                            <MacroCard emoji="🧈" label="Fats" value={macroResults.fats} type="fats" percentage={Math.round((macroResults.fats * 9) / macroResults.targetCalories * 100)} />
                        </Grid>
                    </Card>

                    {/* Macro Tips */}
                    <Card variant="elevated" className="nutrition-tips">
                        <h3>💡 Nutrition Tips</h3>
                        <ul>
                            <li>Eat protein with every meal to stay fuller longer</li>
                            <li>Choose complex carbs (whole grains, vegetables, fruits)</li>
                            <li>Include healthy fats (avocado, nuts, olive oil)</li>
                            <li>Drink plenty of water throughout the day</li>
                            <li>Track your meals to ensure you hit your targets</li>
                            <li>{macroResults.isWeightLoss ? 'A calorie deficit is essential for weight loss' : 'Eat in a surplus to gain muscle'}</li>
                        </ul>
                    </Card>
                </Section>
            )}
        </div>
    );
};

export default NutritionPlanner;
