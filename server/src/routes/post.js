import express from "express";
import * as postController from "../controllers/post.js";
import verifyToken from "../middlewares/verifyToken.js";

const   router = express.Router();

router.get("/", postController.getPosts);
// router.get("/:id", postController.findPostById);
router.post("/", postController.createPost);
router.put("/:id", postController.updatePost);
router.delete("/:id", postController.deletePost);
router.get("/limit", postController.getPostsLimit);
router.get("/new-post", postController.getNewPosts);

export default router;
