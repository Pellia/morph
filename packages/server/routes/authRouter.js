import { Router } from "express";
import { userSchema, signInSchema } from "../schemas/userSchema.js";
import { signIn, signUp, logOut } from "../controllers/auth.js";
import validateJOI from "../middlewares/validateJOI.js";
import verifyToken from "../middlewares/verifyToken.js";

const authRouter = Router();

authRouter.route("/signup").post(validateJOI(userSchema), signUp);
authRouter.route("/signin").post(validateJOI(signInSchema), signIn);
authRouter.route("/logout").get(verifyToken, logOut);

export default authRouter;
