import { FC, useState, ReactNode } from 'react';
import { Section, IntroSection, Card } from './UI';
import { bodyCareGuidelines } from '../data/bodyCareData.ts';
import './BodyCareTracker.css';

const BodyCareTracker: FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('skin');
  const categories = Object.keys(bodyCareGuidelines);
  const currentGuide = bodyCareGuidelines[selectedCategory];

  const getCategoryIcon = (category) => {
    const icons = {
      skin: '✨',
      hydration: '💧',
      eye: '👁️',
      teeth: '🦷',
      hair: '💇',
      meals: '🥗'
    };
    return icons[category] || '❤️';
  };

  // Generic section renderers based on data structure
  const renderTipsSection = (tips, icon = '✓') => (
    <div className="tips-grid">
      {tips.map((tip, idx) => (
        <Card key={idx} variant="outline" className="tip-card">
          <div className="tip-content">
            <span className="tip-icon">{icon}</span>
            <p className="tip-text">{tip}</p>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderItemsList = (items, keyLabel, valueLabel, cardClass = 'schedule-card') => (
    <div className="schedule-grid">
      {items.map((item, idx) => (
        <Card key={idx} variant="outline" className={cardClass}>
          <div className="schedule-item">
            <span className="schedule-title">{item[keyLabel]}</span>
            <span className="schedule-frequency">{item[valueLabel]}</span>
          </div>
        </Card>
      ))}
    </div>
  );

  const renderNutrientGrid = (items, valueKey = 'benefit') => (
    <div className="nutrition-grid">
      {items.map((item, idx) => (
        <Card key={idx} variant="outline" className="nutrition-item">
          <span className="nutrient-icon">💊</span>
          <p><strong>{item.name || item.nutrient}:</strong> {item[valueKey]}</p>
        </Card>
      ))}
    </div>
  );

  // Category-specific rendering logic
  const renderCategoryContent = () => {
    const { content } = currentGuide;

    switch (selectedCategory) {
      case 'skin':
      case 'hydration':
        return (
          <>
            <Section title="Overview">
              <Card variant="outline" className="routine-card">
                <div className="routine-details">
                  <div className="detail-item">
                    <span className="detail-key">Routine:</span>
                    <span className="detail-value">{content.routine}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-key">Product:</span>
                    <span className="detail-value">{content.product}</span>
                  </div>
                </div>
              </Card>
            </Section>
            <Section title="Tips & Recommendations">
              {renderTipsSection(content.tips, selectedCategory === 'hydration' ? '💧' : '✓')}
            </Section>
          </>
        );

      case 'eye':
        return (
          <>
            <Section title="20-20-20 Rule">
              <Card variant="elevated" className="rule-card">
                <div className="rule-content">
                  <h3 className="rule-title">{content.rule}</h3>
                  <p className="rule-text">{content.description}</p>
                  <div className="rule-highlight">
                    <p>🕐 Every 20 minutes</p>
                    <p>📏 Look at something 20 feet away</p>
                    <p>⏱️ For 20 seconds</p>
                  </div>
                </div>
              </Card>
            </Section>

            <Section title="Lens Types & Products">
              <div className="products-grid">
                {content.products.map((product, idx) => (
                  <Card key={idx} variant="outline" className="product-card">
                    <div className="product-content">
                      <h4 className="product-name">{product.name}</h4>
                      <p className="product-use">{product.use}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Vision Conditions">
              <div className="conditions-grid">
                {Object.entries(content.conditions).map(([key, value]) => (
                  <Card key={key} variant="outline" className="condition-card">
                    <h4>{key.charAt(0).toUpperCase() + key.slice(1)}</h4>
                    <p>{value}</p>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Nutrition for Eye Health">
              <Card variant="outline" className="nutrition-card">
                <p>{content.nutrition}</p>
              </Card>
            </Section>
          </>
        );

      case 'teeth':
        return (
          <>
            <Section title="Daily Oral Hygiene">
              <div className="routine-sections">
                <Card variant="outline" className="routine-section">
                  <h4>🌅 Morning Routine</h4>
                  {content.morning.map((item, idx) => (
                    <p key={idx} className="routine-item">✓ {item}</p>
                  ))}
                </Card>
                <Card variant="outline" className="routine-section">
                  <h4>🌙 Evening Routine</h4>
                  {content.evening.map((item, idx) => (
                    <p key={idx} className="routine-item">✓ {item}</p>
                  ))}
                </Card>
              </div>
            </Section>

            <Section title="Professional Care Schedule">
              {renderItemsList(content.schedule, 'title', 'frequency')}
            </Section>

            <Section title="Foods for Dental Health">
              <Card variant="outline" className="foods-card">
                {content.foods.map((food, idx) => (
                  <p key={idx} className="food-item">🥗 {food}</p>
                ))}
              </Card>
            </Section>

            <Section title="RDA Scale (Toothpaste Abrasiveness)">
              <div className="rda-grid">
                {Object.entries(content.rdaScale).map(([level, description]) => (
                  <Card key={level} variant="outline" className="rda-card">
                    <h4 className="rda-level">{level.toUpperCase()}</h4>
                    <p>{description}</p>
                  </Card>
                ))}
              </div>
            </Section>
          </>
        );

      case 'hair':
        return (
          <>
            <Section title="Hair Growth Facts">
              <Card variant="elevated" className="info-card">
                <p><strong>Structure:</strong> {content.structure}</p>
                <div className="growth-info">
                  <p>📊 Daily Growth: {content.growth.daily}</p>
                  <p>📊 Monthly Growth: {content.growth.monthly}</p>
                  <p>📊 Yearly Growth: {content.growth.yearly}</p>
                </div>
              </Card>
            </Section>

            <Section title="Hair Care Schedule">
              {renderItemsList(content.washingSchedule, 'type', 'frequency')}
            </Section>

            <Section title="Hair Care Products">
              <div className="products-grid">
                {content.products.map((product, idx) => (
                  <Card key={idx} variant="outline" className="product-card">
                    <h4>{product.type}</h4>
                    <p>{product.recommendation}</p>
                    <span className="product-frequency">{product.frequency}</span>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Essential Nutrients for Hair">
              <div className="nutrients-grid">
                {content.nutrients.map((item, idx) => (
                  <Card key={idx} variant="outline" className="nutrient-card">
                    <h4>{item.nutrient}</h4>
                    <p>{item.role}</p>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Hair Care Routine">
              {renderTipsSection(content.routine, '✂️')}
            </Section>

            <Section title="Advanced Treatments">
              <div className="treatments-grid">
                {content.treatments.map((treatment, idx) => (
                  <Card key={idx} variant="outline" className="treatment-card">
                    <h4>{treatment.name}</h4>
                    <p><strong>Type:</strong> {treatment.type}</p>
                    <p><strong>Use:</strong> {treatment.use}</p>
                    <p><strong>Timeline:</strong> {treatment.timeline}</p>
                    <p className="treatment-note"><em>💡 {treatment.note}</em></p>
                  </Card>
                ))}
              </div>
            </Section>
          </>
        );

      case 'meals':
        return (
          <>
            <Section title="Meal Plan Overview">
              <Card variant="elevated" className="meal-overview">
                <div className="overview-content">
                  {content.mealStructure.map((meal, idx) => (
                    <div key={idx} className="meal-item">
                      <h4>{meal.name}</h4>
                      <p>{meal.description}</p>
                      <div className="meal-meta">
                        <span className="meal-time">{meal.time}</span>
                        <span className="meal-calories">{meal.calories}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </Section>

            <Section title="Foods to Include">
              <div className="foods-grid">
                {content.healthyFoods.map((food, idx) => (
                  <Card key={idx} variant="outline" className="food-card">
                    <span className="food-emoji">{food.emoji}</span>
                    <h4>{food.name}</h4>
                    <p>{food.benefits}</p>
                    <span className="frequency">{food.frequency}</span>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Foods to Limit">
              <Card variant="outline" className="cautionary-card">
                {content.foodsToLimit.map((food, idx) => (
                  <p key={idx} className="cautionary-item">{food}</p>
                ))}
              </Card>
            </Section>

            <Section title="Daily Essential Intake">
              <Card variant="outline" className="supplements-card">
                {content.dailyIntake.map((item, idx) => (
                  <p key={idx}>{item}</p>
                ))}
              </Card>
            </Section>

            <Section title="Macronutrients">
              {renderNutrientGrid(content.macronutrients)}
            </Section>

            <Section title="Micronutrients">
              {renderNutrientGrid(content.micronutrients)}
            </Section>

            <Section title="Detailed Meal Schedule">
              <div className="meal-schedule">
                {content.mealSchedule.map((meal, idx) => (
                  <Card key={idx} variant="outline" className="meal-detail-card">
                    <h4>{meal.time}</h4>
                    <div className="meal-nutrition">
                      <span className="nutrition-item">{meal.calories}</span>
                      <span className="nutrition-item">P: {meal.protein}</span>
                      <span className="nutrition-item">C: {meal.carbs}</span>
                      <span className="nutrition-item">F: {meal.fats}</span>
                    </div>
                    <ul className="meal-items">
                      {meal.items.map((item, itemIdx) => (
                        <li key={itemIdx}>{item.food} ({item.kcal} kcal)</li>
                      ))}
                    </ul>
                    <p className="meal-benefit"><em>✨ {meal.benefit}</em></p>
                  </Card>
                ))}
              </div>
            </Section>

            <Section title="Daily Totals">
              <Card variant="elevated" className="totals-card">
                <div className="totals-grid">
                  {Object.entries(content.dailyTotals).map(([key, value]) => (
                    <div key={key} className="total-item">
                      <span className="total-label">{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                      <span className="total-value">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </Section>

            <Section title="Budget & Shopping">
              <div className="budget-grid">
                <Card variant="outline" className="budget-card">
                  <h4>Monthly Requirements</h4>
                  <ul className="requirements-list">
                    {content.monthlyRequirements.map((item, idx) => (
                      <li key={idx}>{item.item} - {item.cost}</li>
                    ))}
                  </ul>
                </Card>
                <Card variant="outline" className="budget-card">
                  <h4>Fresh Items</h4>
                  <p>{content.monthlyFresh.items}</p>
                  <p className="cost-label">{content.monthlyFresh.cost}</p>
                  <h4 style={{ marginTop: '16px' }}>Seasonal Fruits</h4>
                  <p>{content.monthlyFruits.note}</p>
                  <p className="cost-label">{content.monthlyFruits.cost}</p>
                </Card>
              </div>
            </Section>

            <Section title="Summary">
              <Card variant="elevated" className="summary-card">
                <p><strong>Total Monthly Cost:</strong> {content.totalMonthlyCost}</p>
                <p className="warning-note">{content.note}</p>
              </Card>
            </Section>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="body-care-tracker">
      <IntroSection
        title="❤️ Body Care Guidelines"
        subtitle="Complete health and wellness routines for every aspect of your body"
        variant="gradient"
      />

      {/* Category Tabs */}
      <Section title="Select Care Category">
        <div className="category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              <span className="tab-icon">{getCategoryIcon(category)}</span>
              <span className="tab-label">{bodyCareGuidelines[category].title}</span>
            </button>
          ))}
        </div>
      </Section>

      {/* Category Content */}
      {currentGuide && (
        <div className="category-content">
          <Card variant="elevated" className="category-header">
            <div className="header-content">
              <h2 className="category-title">{currentGuide.title}</h2>
              {currentGuide.content.description && (
                <p className="category-description">{currentGuide.content.description}</p>
              )}
            </div>
          </Card>

          {/* Render category-specific content */}
          <div className="content-sections">
            {renderCategoryContent()}
          </div>

          {/* Summary Card */}
          <Card variant="elevated" className="summary-card">
            <div className="summary-content">
              <h3>💡 Quick Tips</h3>
              <ul className="summary-list">
                <li>Consistency is key - make these habits daily</li>
                <li>Start with one routine and gradually add others</li>
                <li>Listen to your body and adjust as needed</li>
                <li>Combine these practices with a balanced diet and exercise</li>
                <li>Get adequate sleep (7-9 hours) for overall health</li>
              </ul>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default BodyCareTracker;
