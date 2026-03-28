import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "./UI";
import { REDUX_ACTIONS } from "../store/index";
import "./Auth.css";

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState({ 
        email: "", 
        password: "", 
        confirmPassword: "",
        fullName: "",
        username: "",
        dateOfBirth: "",
        profileImage: null
    });
    const [imagePreview, setImagePreview] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setError("");
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
                setFormData(prev => ({ ...prev, profileImage: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.email || !formData.password) {
            setError("Email and password are required");
            return;
        }

        if (isSignUp) {
            if (!formData.fullName || !formData.username || !formData.dateOfBirth) {
                setError("Full Name, Username and Date of Birth are required");
                return;
            }
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match");
                return;
            }
            if (formData.password.length < 4) {
                setError("Password must be at least 4 characters");
                return;
            }
            dispatch({ 
                type: REDUX_ACTIONS.SIGN_UP, 
                payload: { 
                    email: formData.email, 
                    password: formData.password,
                    fullName: formData.fullName,
                    username: formData.username,
                    dateOfBirth: formData.dateOfBirth,
                    avatar: formData.profileImage
                } 
            });
        } else {
            dispatch({ type: REDUX_ACTIONS.LOGIN, payload: { email: formData.email, password: formData.password } });
        }

        setFormData({ email: "", password: "", confirmPassword: "", username: "", dateOfBirth: "", profileImage: null });
        setImagePreview("");
        navigate("/");
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h1>❤️ Health Monitor</h1>
                    <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    {isSignUp && (
                        <div className="form-group">
                            <label>Profile Picture (Optional)</label>
                            <div className="image-upload-wrapper">
                                {imagePreview && (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Profile Preview" className="preview-img" />
                                        <button 
                                            type="button"
                                            className="remove-image-btn"
                                            onClick={() => {
                                                setImagePreview("");
                                                setFormData(prev => ({ ...prev, profileImage: null }));
                                            }}
                                        >
                                            ✕ Remove
                                        </button>
                                    </div>
                                )}
                                <label className="image-input-label">
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageChange}
                                        className="image-file-input"
                                        style={{ display: 'none' }}
                                    />
                                    <span className="upload-btn">
                                        {imagePreview ? '📸 Change Picture' : '📸 Choose Picture'}
                                    </span>
                                </label>
                            </div>
                        </div>
                    )}

                    {isSignUp && (
                        <Input
                            label="Full Name"
                            name="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                        />
                    )}

                    {isSignUp && (
                        <Input
                            label="Username"
                            name="username"
                            type="text"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Choose your username"
                        />
                    )}

                    {isSignUp && (
                        <Input
                            label="Date of Birth"
                            name="dateOfBirth"
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={handleChange}
                        />
                    )}

                    <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />

                    {isSignUp && (
                        <Input
                            label="Confirm Password"
                            name="confirmPassword"
                            type="password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm your password"
                        />
                    )}

                    <Button type="submit" variant="primary" className="auth-submit-btn">
                        {isSignUp ? "Create Account" : "Login"}
                    </Button>
                </form>

                <div className="auth-toggle">
                    <p>
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={() => {
                                setIsSignUp(!isSignUp);
                                setFormData({ email: "", password: "", confirmPassword: "", fullName: "", username: "", dateOfBirth: "", profileImage: null });
                                setImagePreview("");
                                setError("");
                            }}
                            className="toggle-btn"
                        >
                            {isSignUp ? "Login" : "Sign Up"}
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
