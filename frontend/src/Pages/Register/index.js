import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import './style.css';

function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

        // Full name validation
        if (!formData.fullname.trim()) {
            newErrors.fullname = 'Full name is required';
        } else if (formData.fullname.trim().length < 2) {
            newErrors.fullname = 'Full name must be at least 2 characters';
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: ''
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage('');
        setErrors({});

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            const res = await register(formData.fullname.trim(), formData.email.trim(), formData.password);
            if (res) {
                setSuccessMessage('Registration successful! Redirecting to login...');
                setFormData({
                    fullname: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                });
                setTimeout(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error) {
            console.error("Registration error:", error);
            setErrors({
                general: error.response?.data?.message || 'Registration failed. Please try again.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="register-page">
            <div className="register-page-content">
                <div className="register-header">
                    <h1>Create Account</h1>
                    <p>Join us to get started</p>
                </div>

                {successMessage && (
                    <div className="success-message" role="alert">
                        {successMessage}
                    </div>
                )}

                {errors.general && (
                    <div className="error-message" role="alert">
                        {errors.general}
                    </div>
                )}

                <div className="register-main">
                    <form onSubmit={handleSubmit} noValidate>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Enter your full name"
                                value={formData.fullname}
                                onChange={handleChange}
                                className={errors.fullname ? 'error' : ''}
                                aria-describedby={errors.fullname ? 'fullname-error' : undefined}
                                required
                            />
                            {errors.fullname && (
                                <span id="fullname-error" className="field-error" role="alert">
                                    {errors.fullname}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                                required
                            />
                            {errors.email && (
                                <span id="email-error" className="field-error" role="alert">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                className={errors.password ? 'error' : ''}
                                aria-describedby={errors.password ? 'password-error' : undefined}
                                required
                            />
                            {errors.password && (
                                <span id="password-error" className="field-error" role="alert">
                                    {errors.password}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={errors.confirmPassword ? 'error' : ''}
                                aria-describedby={errors.confirmPassword ? 'confirmPassword-error' : undefined}
                                required
                            />
                            {errors.confirmPassword && (
                                <span id="confirmPassword-error" className="field-error" role="alert">
                                    {errors.confirmPassword}
                                </span>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={isLoading ? 'loading' : ''}
                        >
                            {isLoading ? 'Creating Account...' : 'Register'}
                        </button>
                    </form>
                </div>

                <div className="register-footer">
                    <p>Already have an account? <Link to="/">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Register;