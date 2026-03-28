import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children, className = "", variant = "default", hover = false }) => {
    const classes = `card card-${variant} ${hover ? "card-hover" : ""} ${className}`;
    return <div className={classes}>{children}</div>;
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["default", "elevated", "outline"]),
    hover: PropTypes.bool,
};

export default Card;
