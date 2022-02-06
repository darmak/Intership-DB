import mongoose from 'mongoose';
import { compareSync } from 'bcrypt';

const userSchema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    salary: { type: String },
    email:{type: String},
    hash_password: { type: String}
});

userSchema.methods.comparePassword = function(password) {
    return compareSync(password, this.hash_password);
}


export const User = mongoose.model('user', userSchema);
