import jwt from 'jsonwebtoken';
import { User } from '../models/User.js';

const TOKEN_KEY = 'Mkjikb87urjb7i6y4b6n6be64ibij';

export const sign_in = function(req, res) {
    User.findOne({
        email: req.body.email
    }, 
    function(err, user) {
        if (err) throw err;
        if (!user || !user.comparePassword(req.body.password)) {
            return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({ token: jwt.sign({ _id: user._id }, TOKEN_KEY) });
    });
};