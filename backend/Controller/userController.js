const { UserDA } = require("../Data_access");

const userController = {
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
        const newUser = { fullname, email, password };
        const createdUser = await UserDA.create(newUser);
        res.status(201).json(createdUser);
    }
}

module.exports = userController;