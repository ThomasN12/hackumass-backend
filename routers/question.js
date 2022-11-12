import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createQuestion,
	deleteQuestion,
	getQuestionsByCourse,
	readQuestion,
	updateRating,
	updateQuestion,
} from "../controllers/question.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getQuestionsByCourse));

router.get("/:questionId", wrapAsync(readQuestion));

router.post("/", wrapAsync(createQuestion));

router.put("/rating", wrapAsync(updateRating));

router.put("/", wrapAsync(updateQuestion));

router.delete("/", wrapAsync(deleteQuestion));

export default router;
