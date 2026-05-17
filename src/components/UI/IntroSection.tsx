import { FC } from 'react';
import './IntroSection.css';

interface IntroSectionProps {
  title: string;
  subtitle?: string;
  variant?: 'default' | 'gradient' | 'outline';
}

const IntroSection: FC<IntroSectionProps> = ({
  title,
  subtitle,
  variant = 'default'
}) => {
  return (
    <div className={`intro-section intro-section-${variant}`}>
      <div className="intro-content">
        <h1 className="intro-title">{title}</h1>
        {subtitle && <p className="intro-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default IntroSection;
