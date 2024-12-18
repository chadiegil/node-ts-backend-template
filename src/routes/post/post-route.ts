import express from "express"
import * as PostController from "../../controller/post/post-controller"

const router = express.Router()

router.get("/", PostController.index)
router.post("/", PostController.createPost)
router.put("/:id", PostController.updatePost)
router.delete("/:id", PostController.deletePost)
export default router
