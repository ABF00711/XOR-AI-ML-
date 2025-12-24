import useAuth from "../../Hook/useAuth";

function Register() {
    const {user, setUser, register} = useAuth();

    return (<>
        <div className="register-page">
            <div className="register-page-content">
                <div className="register-header">
                    <h1>Register</h1>
                </div>
                <div className="register-main">
                    
                </div>
                <div className="register-footer">

                </div>
            </div>
        </div>
    </>);
}

export default Register;