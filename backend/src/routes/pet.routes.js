import Router from "express";
import { registerPet } from "../controllers/pet.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
const petRouter = Router();

petRouter.route("/addPet").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerPet
);

export { petRouter };
