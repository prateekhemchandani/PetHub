import Router from "express";
import { registerPet, removePet } from "../controllers/pet.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import {Pet} from "../models/pet.model.js"; // Import Pet model

const petRouter = Router();

// Fetch all pets from database
petRouter.get("/", async (req, res) => {
  try {
    const pets = await Pet.find(); // Retrieve pets from DB
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch pets" });
  }
});

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
