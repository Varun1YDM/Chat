import  express  from "express";
import { logOut, loginUser, signUp } from "../controllers/auth.controllers.js";
const router = express.Router();

router.post("/signup", signUp);

router.post("/login", loginUser);

router.post("/logout", logOut);

export default router;