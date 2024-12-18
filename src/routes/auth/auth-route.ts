import express from "express"
import { login, register } from "../../controller/auth/auth-controller"

const router = express.Router()

router.post("/login", login as any)
router.post("/register", register as any)

export default router
