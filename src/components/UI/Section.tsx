import { FC, ReactNode } from 'react';
import './Section.css';

interface SectionProps {
    title?: string;
    subtitle?: string | null;
    children: ReactNode;
    className?: string;
}

const Section: FC<SectionProps> = ({
    title,
    subtitle = null,
    children,
    className = ''
}) => {
    return (
        <section className={`section ${className}`}>
            {title && (
                <div className="section-header">
                    <h2 className="section-title">{title}</h2>
                    {subtitle && <p className="section-subtitle">{subtitle}</p>}
                </div>
            )}
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;
