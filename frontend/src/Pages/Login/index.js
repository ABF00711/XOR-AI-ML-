import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import './style.css';

function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const validateForm = () => {
        const newErrors = {};

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
            const res = await login(formData.email.trim(), formData.password);
            if (res) {
                setSuccessMessage('Login successful! Redirecting...');
                setFormData({
                    email: '',
                    password: ''
                });
                setTimeout(() => {
                    navigate('/dashboard'); // Redirect to home/dashboard - update this route as needed
                }, 1500);
            }
        } catch (error) {
            console.error("Login error:", error);
            setErrors({
                general: error.response?.data?.message || 'Login failed. Please check your credentials.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <div className="login-page-content">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
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

                <div className="login-main">
                    <form onSubmit={handleSubmit} noValidate>
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
                                placeholder="Enter your password"
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

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" name="remember" />
                                <span>Remember me</span>
                            </label>
                            <Link to="/forgot-password" className="forgot-password">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={isLoading ? 'loading' : ''}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>
                </div>

                <div className="login-footer">
                    <p>Don't have an account? <Link to="/register">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;