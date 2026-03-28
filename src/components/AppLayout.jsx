import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import './AppLayout.css';

/**
 * AppLayout Component
 * 
 * Main layout wrapper that contains:
 * - Navigation header
 * - Outlet for nested routes (Dashboard, ExerciseTracker, etc.)
 */
const AppLayout = () => {
    return (
        <div className="app-layout">
            <MainNavigation />
            <main className="main-content">
                <Outlet />
            </main>
        </div>
    );
};

export default AppLayout;
