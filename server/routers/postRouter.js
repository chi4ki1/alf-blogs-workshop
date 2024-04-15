const express = require('express')
const router = express.Router()

const {
    getAllPosts
} = require('../controllers/PostController')

// All routes here will have /posts

router.get('/', getAllPosts)

module.exports = router