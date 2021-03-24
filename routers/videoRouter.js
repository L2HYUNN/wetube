import express from "express";
import routes from "../routes";
import { deleteVideo, getEditVideo, getUpload, postEditVideo, postUpload, videoDetail } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUpload );
videoRouter.post(routes.upload, uploadVideo, postUpload);

//Edit Video 
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);


videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
