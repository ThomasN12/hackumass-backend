import express from "express";
import { authTokenValidation, googleLoginUser } from "../controllers/auth.js";
import { wrapAsync } from "../utils/index.js";
import authenticateToken from "../middlewares/authenticateToken.js";
const router = express.Router({ mergeParams: true });

router.post("/googlelogin", googleLoginUser);
router.post("/auth-token", authenticateToken, authTokenValidation);

export default router;
