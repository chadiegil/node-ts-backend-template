import * as PostRepository from "../repositories/post-repository"

export const createPost = async (description: string, userId: number) => {
  try {
    if (!description || !userId) {
      throw new Error("Description and UserId is required.")
    }
    return await PostRepository.createPost(description, userId)
  } catch (error) {
    throw new Error("Failed to create new post.")
  }
}

export const getAllPost = async () => {
  return await PostRepository.getAllPost()
}

export const updatePost = async (description: string, userId: number) => {
  try {
    return await PostRepository.updatePost(userId, description)
  } catch (error) {
    throw new Error("Failed to update post.")
  }
}

export const deletePost = async (id: number) => {
  try {
    return await PostRepository.deletePost(id)
  } catch (error) {
    throw new Error("Failed to delete post.")
  }
}
