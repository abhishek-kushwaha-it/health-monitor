import { FC, ChangeEvent, CSSProperties } from 'react';
import './Input.css';

interface InputProps {
    label?: string;
    name: string;
    value: string | number;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    error?: boolean;
    errorMessage?: string;
    success?: boolean;
    disabled?: boolean;
    size?: 'small' | 'normal' | 'large';
}

const Input: FC<InputProps> = ({
    label,
    name,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    required = false,
    className = '',
    error = false,
    errorMessage = '',
    success = false,
    disabled = false,
    size = 'normal'
}) => {
    const inputClasses = [
        'input',
        className,
        error ? 'input-error' : '',
        success ? 'input-success' : '',
        size === 'small' ? 'input-sm' : '',
        size === 'large' ? 'input-lg' : ''
    ].filter(Boolean).join(' ');

    const errorStyle: CSSProperties = {
        color: '#ef4444',
        fontSize: '0.85rem',
        margin: '4px 0 0 0',
        fontWeight: '500'
    };

    const successStyle: CSSProperties = {
        color: '#10b981',
        fontSize: '0.85rem',
        margin: '4px 0 0 0',
        fontWeight: '500'
    };

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
                <p style={errorStyle}>
                    ⚠️ {errorMessage}
                </p>
            )}
            {success && !error && (
                <p style={successStyle}>
                    ✅ Looks good!
                </p>
            )}
        </div>
    );
};

export default Input;
