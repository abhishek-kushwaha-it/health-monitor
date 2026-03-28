import { useState, useMemo } from 'react';
import { Section, IntroSection, Card, Button } from './UI';
import { getTodaysPlan, exercisePlans } from '../data/exercisePlans';
import './ExerciseTracker.css';

// Get category icon and color for exercise
const getCategoryIcon = (category) => {
  const icons = {
    strength: { emoji: '💪', color: '#ef4444', bgColor: '#fecaca' },
    cardio: { emoji: '🏃', color: '#f59e0b', bgColor: '#fcd34d' },
    flexibility: { emoji: '🧘', color: '#8b5cf6', bgColor: '#e9d5ff' },
    recovery: { emoji: '😴', color: '#10b981', bgColor: '#a7f3d0' },
    rest: { emoji: '😴', color: '#10b981', bgColor: '#a7f3d0' }
  };
  return icons[category] || { emoji: '⭐', color: '#3b82f6', bgColor: '#bfdbfe' };
};

// Render motivation message based on completion rate
const MotivationMessage = ({ completionRate, remaining }) => {
  if (completionRate === 100) return { emoji: '🎉', title: 'Perfect! You completed all exercises!', message: 'Outstanding effort today! Keep this momentum going! 💪' };
  if (completionRate >= 75) return { emoji: '💪', title: 'Almost there! You\'re doing great!', message: `Complete ${remaining} more exercises to finish strong!` };
  if (completionRate >= 50) return { emoji: '🔥', title: 'Great progress! Keep it up!', message: `You're halfway done! ${remaining} exercises remaining.` };
  if (completionRate > 0) return { emoji: '👍', title: 'You\'ve started! Let\'s go!', message: `Keep moving forward. ${remaining} exercises left!` };
  return { emoji: '💪', title: 'Ready to get started?', message: 'Check off exercises as you complete them. Let\'s crush this workout!' };
};

const ExerciseTracker = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');
  const [completedExercises, setCompletedExercises] = useState({});

  // Get today's date info
  const today = new Date();
  const dayOfMonth = today.getDate();
  const monthName = today.toLocaleDateString('en-US', { month: 'long' });
  const dayNumber = Math.min(dayOfMonth, 31);

  // Get today's plan based on selected difficulty
  const todaysPlan = useMemo(() => {
    return getTodaysPlan(selectedDifficulty);
  }, [selectedDifficulty]);

  // Calculate analytics
  const analytics = useMemo(() => {
    if (!todaysPlan) return { totalExercises: 0, completed: 0, totalCalories: 0, burnedCalories: 0 };

    const totalExercises = todaysPlan.exercises.length;
    const completedCount = Object.values(completedExercises).filter(v => v).length;
    const totalCalories = todaysPlan.exercises.reduce((sum, ex) => sum + (ex.calories || 0), 0);
    const burnedCalories = todaysPlan.exercises.reduce((sum, ex) => {
      const exerciseId = `${todaysPlan.day}-${ex.name}`;
      return completedExercises[exerciseId] ? sum + (ex.calories || 0) : sum;
    }, 0);
    const completionRate = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

    return {
      totalExercises,
      completed: completedCount,
      totalCalories,
      burnedCalories,
      completionRate
    };
  }, [todaysPlan, completedExercises]);

  const handleToggleExercise = (exerciseName) => {
    const exerciseId = `${todaysPlan.day}-${exerciseName}`;
    setCompletedExercises(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulty(difficulty);
    setCompletedExercises({}); // Clear completed exercises when changing difficulty
  };

  const isRestDay = todaysPlan?.exercises.some(ex => ex.category === 'rest');

  return (
    <div className="exercise-tracker">
      <IntroSection
        title="💪 Exercise Tracker"
        subtitle="Track your daily workouts and fitness activities"
        variant="gradient"
      />

      {/* Difficulty Selector */}
      <Section title="Select Your Difficulty Level">
        <div className="difficulty-selector">
          {Object.keys(exercisePlans).map(difficulty => (
            <Button
              key={difficulty}
              variant={selectedDifficulty === difficulty ? "primary" : "secondary"}
              className={`difficulty-btn`}
              onClick={() => handleDifficultyChange(difficulty)}
            >
              <span className="difficulty-icon">
                {difficulty === 'beginner' && '🌱'}
                {difficulty === 'intermediate' && '🔥'}
                {difficulty === 'advanced' && '💪'}
                {difficulty === 'elite' && '🏆'}
              </span>
              <span className="difficulty-label">
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
            </Button>
          ))}
        </div>
      </Section>

      {/* Today's Workout Header */}
      {todaysPlan && (
        <>
          <Section title={`📅 Day ${dayNumber} of ${monthName}`}>
            <Card variant="elevated" className="day-header-card">
              <div className="day-header-content">
                <h2 className="workout-title">{todaysPlan.name}</h2>
                <p className="workout-date">
                  {monthName} {dayNumber}, {today.getFullYear()}
                </p>
              </div>
            </Card>
          </Section>

          {/* Rest Day or Exercises Section */}
          {isRestDay ? (
            <Section title="😴 Rest & Recovery">
              <Card variant="outline" className="rest-day-card">
                <div className="rest-day-content">
                  <p className="rest-day-emoji">🛌</p>
                  <h3>Recovery Day</h3>
                  <p>Take time to rest, recover, and recharge for your next workout!</p>
                  <p className="rest-tip">💡 Tip: Focus on stretching, hydration, and quality sleep today.</p>
                </div>
              </Card>
            </Section>
          ) : (
            <Section title="🏋️ Today's Exercises">
              <div className="exercises-list">
                {todaysPlan.exercises.map((exercise, index) => {
                  const exerciseId = `${todaysPlan.day}-${exercise.name}`;
                  const isCompleted = completedExercises[exerciseId] || false;
                  const categoryData = getCategoryIcon(exercise.category);

                  return (
                    <Card
                      key={index}
                      variant="outline"
                      className={`exercise-item ${isCompleted ? 'completed' : ''}`}
                    >
                      <div className="exercise-content">
                        <div className="exercise-left">
                          <span className="exercise-type-badge" style={{ borderColor: categoryData.color, backgroundColor: categoryData.bgColor }}>
                            {categoryData.emoji}
                          </span>
                          <div className="exercise-info">
                            <h3 className="exercise-name">{exercise.name}</h3>
                            {exercise.duration && <span className="exercise-duration">⏱️ {exercise.duration}m</span>}
                          </div>
                        </div>
                        <div className="exercise-right">
                          <span className="exercise-calories">
                            {exercise.calories} <span className="cal-label">cal</span>
                          </span>
                          <Button
                            variant="secondary"
                            className={`exercise-checkbox ${isCompleted ? 'checked' : ''}`}
                            onClick={() => handleToggleExercise(exercise.name)}
                            title={isCompleted ? 'Mark as incomplete' : 'Mark as completed'}
                          >
                            {isCompleted ? '✅' : '☐'}
                          </Button>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </Section>
          )}

          {/* Analytics Section - Consolidated */}
          {!isRestDay && (
            <Section title="📊 Today's Progress">
              <div className="analytics-grid">
                <Card variant="elevated" className="analytics-card">
                  <div className="analytics-stat">
                    <div className="stat-icon">🔥</div>
                    <div className="stat-content">
                      <p className="stat-label">Calories Burned</p>
                      <p className="stat-value">
                        {analytics.burnedCalories} / {analytics.totalCalories}
                      </p>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${analytics.totalCalories > 0 ? (analytics.burnedCalories / analytics.totalCalories) * 100 : 0}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="elevated" className="analytics-card">
                  <div className="analytics-stat">
                    <div className="stat-icon">💪</div>
                    <div className="stat-content">
                      <p className="stat-label">Exercises Completed</p>
                      <p className="stat-value">
                        {analytics.completed} / {analytics.totalExercises}
                      </p>
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${analytics.completionRate}%`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card variant="elevated" className="analytics-card">
                  <div className="analytics-stat">
                    <div className="stat-icon">⚡</div>
                    <div className="stat-content">
                      <p className="stat-label">Completion Rate</p>
                      <p className="stat-value">{analytics.completionRate}%</p>
                      <p className="stat-subtitle">{analytics.totalExercises - analytics.completed} remaining</p>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Motivation Message */}
              {analytics.totalExercises > 0 && (() => {
                const motivation = MotivationMessage(analytics.completionRate, analytics.totalExercises - analytics.completed, analytics.totalExercises);
                return (
                  <Card variant="outline" className="motivation-card">
                    <div className="motivation-content">
                      <p className="motivation-emoji">{motivation.emoji}</p>
                      <h3>{motivation.title}</h3>
                      <p>{motivation.message}</p>
                    </div>
                  </Card>
                );
              })()}
            </Section>
          )}
        </>
      )}
    </div>
  );
}

export default ExerciseTracker;
