import { Router } from "express";
import * as blogService from "./blog.service.js"
const router=Router()

router.post("/createBlog",blogService.createBlog)

router.patch("/updateBlog/:id",blogService.updateBlog)

router.delete("/deleteBlog/:id",blogService.deleteBlog)

router.get("/getAllBlogs",blogService.getAllBlogs)

router.get("/getOneBlog/:id",blogService.getOneblog)

export default router