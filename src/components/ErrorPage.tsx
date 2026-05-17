import { FC } from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import './ErrorPage.css';
import { Button } from './UI';

interface RouteError {
    message?: string;
    status?: number | string;
    statusText?: string;
}

const ErrorPage: FC = () => {
    const error = useRouteError() as RouteError;
    const navigate = useNavigate();

    const errorMessage = error?.message || 'An unexpected error occurred';
    const errorStatus = error?.status || '500';
    const errorStatusText = error?.statusText || 'Error';

    const handleGoHome = () => navigate('/', { replace: true });
    const handleGoBack = () => navigate(-1);

    return (
        <div className="error-page">
            <div className="error-container">
                <div className="error-code">❌ {errorStatus}</div>
                <h1 className="error-title">{errorStatusText}</h1>
                <p className="error-message">{errorMessage}</p>

                <div className="error-details">
                    {errorStatus === '404' && (
                        <p className="error-hint">The page you&apos;re looking for doesn&apos;t exist. It might have been moved or deleted.</p>
                    )}
                    {errorStatus === '500' && (
                        <p className="error-hint">Something went wrong on our end. Please try again later.</p>
                    )}
                </div>

                <div className="error-actions">
                    <Button variant="primary" onClick={handleGoHome}>
                        🏠 Go to Home
                    </Button>
                    <Button variant="secondary" onClick={handleGoBack}>
                        ← Go Back
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;