import Router from "express";
import { registerPet, removePet } from "../controllers/pet.controller.js";
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

petRouter.route("/removePet/:id").delete(removePet);

export { petRouter };