const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
if (!process.env.NODE_ENV == "production") {
    require("dotenv").config();
}

const HttpError = require("../models/HttpError");
const Post = require("../models/post-model");
const Admin = require("../models/admin-model");

const login = async (req, res, next) => {
    const { username, password } = req.body;
    const { TOKEN_SIGNATURE_STRING } = process.env;
    let adminFound, isValidPassword = false;

    try {
        adminFound = await Admin
                            .findOne({ username })
                            .select('password');
    } catch(err) {
        return next(new HttpError("Database query error", 500));
    }

    if (!adminFound) {
        return next(new HttpError("Username not found", 404));
    }

    try {
       isValidPassword = await bcrypt.compare(password, adminFound.password);
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    if(!isValidPassword) {
        return next(new HttpError("Login invalid data", 400))
    }

    const { 
        id: adminId,
        username: adminUsername 
    } = adminFound;

    const token = jwt.sign(
        {
            adminId,
            username: adminUsername
        },
        TOKEN_SIGNATURE_STRING,
        { expiresIn: 1800 } // 30 minutes
    );

    res.status(200).json({ adminId, token });
}

const getPostById = async (req, res, next) => {
    const { pid } = req.params;
    let postFound;

    try {
        postFound = await Post.findById(pid);
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    if (!postFound) {
        return next(new HttpError("Post not found", 404));
    }

    res.status(200).json(postFound.toObject({ getters: true }));
}

const createPost = async (req, res, next) => {
    const newPost = new Post({ ...req.body });

    try { 
        await newPost.save();
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    res.status(201).json(newPost.toObject({ getters: true }));
}

const updatePostById = async (req, res, next) => {
    const { pid } = req.params;
    const { label: newLabel } = req.body;
    let postToUpdate;

    try {
        postToUpdate = await Post.findById(pid);
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    if (!postToUpdate) {
        return next(new HttpError("Post not found", 404));
    }

    postToUpdate.label = newLabel;

    try { 
        await postToUpdate.save();
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    res.status(200).json(postToUpdate.toObject({ getters: true }));
}

const deletePostById = async (req, res, next) => {
    const { pid } = req.params;
    let postToDelete;

    try {
        postToDelete = await Post.findById(pid);
    } catch(err){
        return next(new HttpError("Database query error", 500));
    }

    if (!postToDelete) {
        return next(new HttpError("Post not found", 404));
    }

    try {
        await postToDelete.remove();
    } catch(err) {
        return next(new HttpError("Database query error", 500));
    }

    res.status(200).json({ message: "Post correctly deleted" });
}

module.exports = {
    login,
    getPostById,
    createPost,
    updatePostById,
    deletePostById
}