import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Dashboard.css';
import { Section, Grid, Card, IntroSection } from './UI';
import { getTodaysTip } from '../data/dailyTips.ts';
import { RootState } from '../store/index.ts';

interface Exercise {
    exerciseName: string;
    calories: string | number;
    date: string;
}

const Dashboard: FC = () => {
    const exercises = useSelector((state: RootState) => state?.exercises?.logs || []) as Exercise[];
    const todaysTip = getTodaysTip();
    const todayDate = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="dashboard">
            <IntroSection
                title="Welcome to Health Monitor ❤️"
                subtitle="Your personal health and wellness companion"
                variant="gradient"
            />
            <Section title="Quick Stats" subtitle="Today's Overview">
                <p className="date-info">📅 Today: {todayDate}</p>

                <Grid columns={3} gap="16px">
                    <Link to="/exercises" className="feature-link">
                        <Card variant="elevated" hover>
                            <div className="feature-card">
                                <div className="feature-icon">💪</div>
                                <h3>Exercise Tracking</h3>
                                <p>Log workouts and track progress</p>
                            </div>
                        </Card>
                    </Link>

                    <Link to="/nutrition" className="feature-link">
                        <Card variant="elevated" hover>
                            <div className="feature-card">
                                <div className="feature-icon">🥗</div>
                                <h3>Nutrition & Diet</h3>
                                <p>Meal plans and nutrition guide</p>
                            </div>
                        </Card>
                    </Link>

                    <Link to="/bodycare" className="feature-link">
                        <Card variant="elevated" hover>
                            <div className="feature-card">
                                <div className="feature-icon">📋</div>
                                <h3>Body Care</h3>
                                <p>Skin, health & wellness guide</p>
                            </div>
                        </Card>
                    </Link>
                </Grid>
            </Section>

            <Section title="💡 Daily Wellness Tip">
                <Card className="tip-card" variant="outline">
                    <div className="tip-content">
                        {todaysTip?.icon && <span className="tip-icon">{todaysTip.icon}</span>}
                        <p>{todaysTip?.description || 'Stay hydrated and active!'}</p>
                    </div>
                </Card>
            </Section>

            {exercises && exercises.length > 0 && (
                <Section title="📊 Quick Stats">
                    <Grid columns={2} gap="16px">
                        <Card variant="elevated">
                            <p><strong>Total Exercises:</strong> {exercises.length}</p>
                            <p><strong>Total Calories:</strong> {exercises.reduce((sum, ex) => sum + (parseInt(String(ex?.calories)) || 0), 0)} kcal</p>
                        </Card>
                        <Card variant="elevated">
                            <p><strong>Recent Activity:</strong> {exercises[exercises.length - 1]?.exerciseName || 'N/A'}</p>
                            <p><strong>Last Logged:</strong> {exercises[exercises.length - 1]?.date || 'N/A'}</p>
                        </Card>
                    </Grid>
                </Section>
            )}
        </div>
    );
};

export default Dashboard;


