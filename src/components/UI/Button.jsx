import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ 
    children, 
    onClick, 
    type = "button", 
    variant = "primary", 
    size = "md",
    disabled = false,
    className = ""
}) => {
    const classes = `btn btn-${variant} btn-${size} ${disabled ? "btn-disabled" : ""} ${className}`;
    return (
        <button className={classes} onClick={onClick} type={type} disabled={disabled}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary", "danger", "success"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    disabled: PropTypes.bool,
    className: PropTypes.string,
};

export default Button;
