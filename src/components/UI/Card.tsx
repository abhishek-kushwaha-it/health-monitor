import { FC, ReactNode } from 'react';
import './Card.css';

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'elevated' | 'outline';
    hover?: boolean;
}

const Card: FC<CardProps> = ({
    children,
    className = '',
    variant = 'default',
    hover = false
}) => {
    const classes = `card card-${variant} ${hover ? 'card-hover' : ''} ${className}`;
    return <div className={classes}>{children}</div>;
};

export default Card;
