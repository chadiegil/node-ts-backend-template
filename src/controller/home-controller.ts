import { type Request, type Response } from "express"

export const getHome = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "Welcome to home" })
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" })
  }
}
