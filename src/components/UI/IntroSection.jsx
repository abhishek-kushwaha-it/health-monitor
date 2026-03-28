import PropTypes from 'prop-types';
import './IntroSection.css';

const IntroSection = ({ title, subtitle, variant = 'default' }) => {
  return (
    <div className={`intro-section intro-section-${variant}`}>
      <div className="intro-content">
        <h1 className="intro-title">{title}</h1>
        {subtitle && <p className="intro-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

IntroSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'gradient', 'outline'])
};

export default IntroSection;
