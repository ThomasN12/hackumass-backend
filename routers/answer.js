import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createAnswer,
	deleteAnswer,
	getAnswersByQuestion,
	readAnswer,
	updateRating,
	updateAnswer,
} from "../controllers/answer.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getAnswersByQuestion));

router.get("/:answerId", wrapAsync(readAnswer));

router.post("/", wrapAsync(createAnswer));

router.put("/rating", wrapAsync(updateRating));

router.put("/", wrapAsync(updateAnswer));

router.delete("/", wrapAsync(deleteAnswer));

export default router;
