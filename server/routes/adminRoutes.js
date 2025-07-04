import express from 'express';
import { adminLogin, approveCommentById, getAllBlogsAdmin, getAllComments, getDashboard } from '../controllers/adminController.js';
import auth from '../middleware/auth.js';
import { deleteBlogById } from '../controllers/blogController.js';

const adminRouter = express.Router();

adminRouter.post("/login", adminLogin)

adminRouter.get("/comments", auth, getAllComments)
adminRouter.get("/blogs", auth, getAllBlogsAdmin)
adminRouter.post("/delete-comment", auth, deleteBlogById)
adminRouter.post("/approve-comments", auth, approveCommentById)
adminRouter.get("/dashboard", auth, getDashboard)


export default adminRouter;


