const Post = require('../models/postModel')


// @desc  Get All Posts
// @route GET /posts
// access Public
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()

        res.json(posts)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllPosts
}