import { Router } from "express";
import { loginAdmin, registerAdmin } from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.route("/registerAdmin").post(registerAdmin);
adminRouter.route("/loginAdmin").post(loginAdmin);

export default adminRouter;
