import axios from 'axios';

const apiProvider = {
    baseURL: 'http://localhost:5000/api',
    register: async (fullname, email, password) => {
        try {
            const res = await axios.post(`${apiProvider.baseURL}/register`, {
                fullname,
                email,
                password
            });
            return res.data;
        } catch (error) {
            console.log("Registration error:", error);
        }
    },

    login: async (email, password) => {
        try {
            const res = await axios.post(`${apiProvider.baseURL}/login`, {
                email,
                password
            });
            return res.data;
        } catch (error) {
            console.log("Login error:", error);
        }
    }
}

export default apiProvider;