import { object, string } from "yup"

export const loginValidate = object().shape({
  email: string().required(),
  password: string().required(),
})
