import { Router } from "express";
import * as userService from "./user.service.js"
const router=Router()

router.patch("/updateUser/:id",userService.updateUser)

router.delete("/deleteUser/:id",userService.deleteUser)

router.get("/getAllUser",userService.getAllUser)

router.get("/getUserById/:id",userService.getUserById)

export default router