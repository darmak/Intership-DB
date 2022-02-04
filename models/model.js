import mongoose from 'mongoose';

const schema = mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    salary: { type: String }
})

export const User = mongoose.model('user', schema);
