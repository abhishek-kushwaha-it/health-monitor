import PropTypes from "prop-types";
import "./Input.css";

const Input = ({ 
    label, 
    name, 
    value, 
    onChange, 
    type = "text", 
    placeholder = "",
    required = false,
    className = "",
    error = false,
    errorMessage = "",
    success = false,
    disabled = false,
    size = "normal"
}) => {
    const inputClasses = [
        "input",
        className,
        error ? "input-error" : "",
        success ? "input-success" : "",
        size === "small" ? "input-sm" : "",
        size === "large" ? "input-lg" : ""
    ].filter(Boolean).join(" ");

    return (
        <div className="input-group">
            {label && <label htmlFor={name}>{label}</label>}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                className={inputClasses}
            />
            {error && errorMessage && (
                <p style={{ 
                    color: '#ef4444', 
                    fontSize: '0.85rem', 
                    margin: '4px 0 0 0',
                    fontWeight: '500'
                }}>
                    ⚠️ {errorMessage}
                </p>
            )}
            {success && !error && (
                <p style={{ 
                    color: '#10b981', 
                    fontSize: '0.85rem', 
                    margin: '4px 0 0 0',
                    fontWeight: '500'
                }}>
                    ✅ Looks good!
                </p>
            )}
        </div>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    className: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    success: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(["small", "normal", "large"])
};

export default Input;
