import { User } from '../models/User.js';

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch(err) {
        console.log(err);
    }
}

export const createUser = async (req, res) => {
    try {
        const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            salary: Number(req.body.salary)
        });
        await newUser.save();
        res.status(200).json(newUser);
    } catch(err) {
        console.log(err);
    }
   
}

export const removeUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findOne({
            _id: id
        });

        if (user) {
            await User.deleteOne({
                _id: id,
            });
            res.status(200).json({message:'Has been removed user ' + id});
        }
    } catch(err) {
        console.log(err);
    }
}

export const updateUser = async (req, res) => {
    try {
        let userIndex = req.params.id;
        const newUser = {...req.body};
        await User.findOneAndUpdate(
            {
                _id: userIndex
            },
            {
                $set:{
                    ...newUser
                }
            }
        )
        res.status(200).json(newUser);
    } catch(err) {
        console.log(err);
    }
}
