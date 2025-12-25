import { useContext } from "react";
import { UserContext } from "../Context/user.js";
import apiProvider from "../API";

const useAuth = () => {
    const {user, setUser} = useContext(UserContext);

    const register = async (fullname, email, password) => {
       try {
            const res = await apiProvider.register(fullname, email, password);
            setUser(res);
            return res;
       } catch (error) {
            console.log("Registration error:", error);
       }
    }

    const login = async (email, password) => {
        try {
            const res = await apiProvider.login(email, password);
            setUser(res);
            return res;
        } catch (error) {
            console.log("Login error:", error);
        }
    }

    const logout = () => {
        setUser(null);
    }

    return {
        user,
        setUser,
        register,
        login,
        logout
    };
}

export default useAuth;