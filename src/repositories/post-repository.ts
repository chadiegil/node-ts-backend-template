import prisma from "../utils/prisma"

import { type Prisma } from "@prisma/client"

export const getAllPost = async () => {
  return await prisma.post.findMany()
}

export const getSinglePost = async (id: number) => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
  })
}

export const createPost = async (description: string, userId: number) => {
  return await prisma.post.create({
    data: {
      description,
      userId,
    },
  })
}

export const updatePost = async (id: number, description: string) => {
  return await prisma.post.update({
    where: {
      id,
    },
    data: {
      description,
    },
  })
}

export const deletePost = async (id: number) => {
  return await prisma.post.delete({
    where: {
      id,
    },
  })
}

export const paginatedPost = async (skip: number, take: number) => {
  return await prisma.post.findMany({
    skip,
    take,
    orderBy: {
      id: "asc",
    },
  })
}
