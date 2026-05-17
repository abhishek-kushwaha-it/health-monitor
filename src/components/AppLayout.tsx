import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from './MainNavigation.tsx';
import './AppLayout.css';

const AppLayout: FC = () => {
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
