const bcrypt = require("bcrypt");
const User = require("../models/userModel");

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send({
            message: "Record list",
            users: users
        });
    } catch (error) {
        console.log(error)
    }
}


const adduser = async (req, res) => {
    try {
        const { name, email, password, age, city } = req.body;
        const hasedpassword = await bcrypt.hash(password, 12);
        const obj = new User({
            name,
            email,
            password: hasedpassword,
            age,
            city
        });

        await obj.save();

        res.status(200).json({
            message: "User created",
            data: obj
        });
    } catch (error) {
        console.log(error)
    }
}

const getUserById = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        res.status(200).send({
            message: "Data found",
            user: user
        });
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).send({
            message: "Data found",
            user: user
        });
    } catch (error) {
        console.log(error)
    }
}


const updateUser = async (req, res) => {
    const id = req.params.id;

    const { name, email, password, age, city } = req.body;

    const hasedpassword = await bcrypt.hash(password, 12);

    const obj = {
        name,
        email,
        password: hasedpassword,
        age,
        city
    };
    try {

        const user = await User.findByIdAndUpdate(
            id,
            {
                $set: obj
            },
            { new: true }
        );
        res.status(200).send({
            message: "Record update successfully",
            user: user
        });
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    getUser,
    adduser,
    getUserById,
    deleteUser,
    updateUser
}