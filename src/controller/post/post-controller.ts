import { type Request, type Response } from "express"

import * as PostService from "../../services/post-service"

export const index = async (req: Request, res: Response) => {
  try {
    const post = await PostService.getAllPost()
    res.json(post)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const { description, userId } = req.body
    const newPost = await PostService.createPost(description, userId)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}

export const updatePost = async (req: Request, res: Response) => {
  try {
    const { description, userId } = req.body
    const newPost = await PostService.updatePost(description, userId)
    res.status(200).json(newPost)
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    await PostService.deletePost(parseInt(id))
    res
      .status(200)
      .json({ message: `Post with id ${id} is deleted successfully.` })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." })
  }
}
