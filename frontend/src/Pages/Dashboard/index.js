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
                    <div className='training'>
                        <div className='training-content'>
                            <div className='default_training'>
                                <div className='trainingOption'>
                                    <h2>Default Training Settings</h2>
                                </div>
                                <div className='trainingData'>
                                    <div className='learningRate'>
                                        <label>Learning Rate:</label>
                                        <input type="number" step="0.01" min="0.01" max="1.0" defaultValue="0.1" />
                                    </div>
                                    <div className='trainNumber'>
                                        <label>Epochs:</label>
                                        <input type="number" min="1" max="10000" defaultValue="1000" />
                                    </div>
                                    <div className='train_btn'>
                                        <button>Start Training</button>
                                    </div>
                                </div>
                            </div>
                            <div className='custom_training'>
                                <div className='trainingOption'>
                                    <h2>Custom Training Settings</h2>
                                </div>
                                <div className='trainingData'>
                                    <div className='input_value'>
                                        <label>X1 Value:</label>
                                        <input type="number" min="0" max="1" step="1" defaultValue="0" />
                                    </div>
                                    <div className='input_value'>
                                        <label>X2 Value:</label>
                                        <input type="number" min="0" max="1" step="1" defaultValue="0" />
                                    </div>
                                    <div className='input_value'>
                                        <label>Desired Output:</label>
                                        <input type="number" min="0" max="1" step="1" defaultValue="0" />
                                    </div>
                                    <div className='customTrain_btn'>
                                        <button>Start Training</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='trainingResult'>
                            <div className='resultHeader'>
                                <h2>Training Results</h2>
                                <p>Epochs Trained: 1000</p>
                            </div>
                            <div className='resultContent'>
                                <table className='resultTable'>
                                    <thead>
                                        <tr>
                                            <th>W1</th>
                                            <th>W2</th>
                                            <th>Test</th>
                                            <th>Output</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0.43</td>
                                            <td>0.245</td>
                                            <td><button>Test</button></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>0.43</td>
                                            <td>0.245</td>
                                            <td><button>Test</button></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>0.43</td>
                                            <td>0.245</td>
                                            <td><button>Test</button></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>0.43</td>
                                            <td>0.245</td>
                                            <td><button>Test</button></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>0.43</td>
                                            <td>0.245</td>
                                            <td><button>Test</button></td>
                                            <td></td>
                                        </tr>
                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;