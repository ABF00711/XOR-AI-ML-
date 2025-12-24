const { UserDA } = require("../Data_access");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const configs = require("../Configs");

const userController = {
    getFinalID: async() => {
        const allUsers = await UserDA.readAll();
        if(allUsers.length === 0) return 1;
        const ids = allUsers.map(user => user.id);
        return Math.max(...ids) + 1;
    },

    getAllUsers: async(req, res) => {
        const users = await UserDA.readAll();
        if(users.length === 0) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    },

    register: async(req, res) => {
        const { fullname, email, password } = req.body;
        if(!fullname || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const allUsers = await UserDA.readAll();
        const existingUser = allUsers.find(user => user.email === email);
        if(existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const id = await userController.getFinalID();
        const newUser = { id, fullname, email, hashedPassword };
        const createdUser = await UserDA.create(newUser);
        res.status(201).json(createdUser);
    },

    login: async(req, res) => {
        const { email, password } = req.body;
        const allUsers = await UserDA.readAll();
        const user = allUsers.find(u => u.email === email);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);
        if(!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        jwt.sign({ id: user.id, email: user.email }, configs.secretKey, { expiresIn: '1h' }, (err, token) => {;
            if(err) {
                return res.status(500).json({ message: "Error generating token" });
            }
            res.status(200).json({ message: "Login successful", user, token });
        });
    }
}

module.exports = userController;