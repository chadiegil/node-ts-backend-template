// auth-controller.ts
import { Request, Response } from "express"
import prisma from "../../utils/prisma"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required." })
  }

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    })

    const isPasswordValid = await bcrypt.compare(password, user?.password ?? "")
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." })
    }

    const token = jwt.sign(
      { id: user?.id, email: user?.email },
      process.env.SECRET_TOKEN as string,
      { expiresIn: "1h" }
    )
    return res.status(200).json({
      message: "Login successful",
      user: { ...user, password: undefined },
      token,
    })
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." })
  }
}

export const register = async (req: Request, res: Response) => {
  const { email, password, first_name, last_name, role } = req.body

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser)
      return res.status(400).json({ message: "User already exists." })

    const hashPassword = await bcrypt.hash(password, 10)

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashPassword,
        first_name,
        last_name,
        role,
      },
    })

    return res.status(201).json({
      message: "User created successfully",
      user: newUser,
    })
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong." })
  }
}
