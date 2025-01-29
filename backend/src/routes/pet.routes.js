import Router from "express";
import { registerPet } from "../controllers/pet.controller.js";

const petRouter = Router();

petRouter.route("/addPet").post(registerPet);

export { petRouter };
