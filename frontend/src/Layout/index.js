import { useNavigate } from 'react-router-dom';
import useAuth from '../Hook/useAuth';
import './index.css';

function Layout({ children }) {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="layout-container">
            <nav className="dashboard-nav">
                <div className="nav-brand">
                    <h2>XOR Neural Network</h2>
                </div>
                <div className="nav-user">
                    <span>Welcome, {user?.fullname || 'User'}</span>
                    <button onClick={handleLogout} className="logout-btn">
                        Logout
                    </button>
                </div>
            </nav>
            <div className="layout-content">
                {children}
            </div>
        </div>
    );
}

export default Layout;

