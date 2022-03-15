import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

const users = mongoose.model("Users", usersSchema);

export default users;
