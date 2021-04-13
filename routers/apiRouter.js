import express from "express";
import { postAddCommnet, postRegisterView } from "../controllers/videoController";
import routes from "../routes";


const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterView);
apiRouter.post(routes.addComment, postAddCommnet);

export default apiRouter;