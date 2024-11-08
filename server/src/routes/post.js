import express from 'express'
import * as postController from '../controllers/post.js'

const router = express.Router()

router.get('/', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-post', postController.getNewPosts)


export default router