import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controllers/userController";
import routers from "../routes";

const userRouter = express.Router();

userRouter.get(routers.users, users);
userRouter.get(routers.userDetail, userDetail);
userRouter.get(routers.editProfile, editProfile);
userRouter.get(routers.changePassword, changePassword);

export default userRouter;