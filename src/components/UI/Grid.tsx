import { FC, ReactNode, CSSProperties } from 'react';
import './Grid.css';

interface GridProps {
    children: ReactNode;
    columns?: number;
    gap?: string;
    className?: string;
}

const Grid: FC<GridProps> = ({
    children,
    columns = 3,
    gap = '16px',
    className = ''
}) => {
    const style: CSSProperties = {
        gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
        gap,
    };
    return <div className={`grid grid-${columns} ${className}`} style={style}>{children}</div>;
};

export default Grid;
