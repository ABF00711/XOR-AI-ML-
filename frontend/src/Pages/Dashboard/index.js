import { useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import "./index.css";

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="dashboard-page">
            <div className="dashboard-content">
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
                <div className="dashboard-main">
                    <div className="perceptron">
                        <div className="title">XOR Neural Network</div>
                        <div className="function">f(x₁, x₂) = x₁ ⊕ x₂</div>
                        <div className="description">The XOR function outputs true only when the inputs differ. This seemingly simple operation was historically challenging for neural networks to learn, making it a perfect benchmark for testing AI capabilities.</div>
                        <div className="neural_network">
                            <img src="/images/NN(XOR).png" alt="XOR Neural Network Diagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;