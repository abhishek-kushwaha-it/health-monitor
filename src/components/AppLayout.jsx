import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation';
import './AppLayout.css';

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
