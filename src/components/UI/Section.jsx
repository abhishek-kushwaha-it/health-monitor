import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ title, subtitle = null, children, className = "" }) => {
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

Section.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Section;
