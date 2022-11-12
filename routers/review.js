import express from "express";
const router = express.Router({ mergeParams: true });

import {
	createReview,
	deleteReview,
	getReviewsByCourse,
	readReview,
	updateRating,
	updateReview,
} from "../controllers/review.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(getReviewsByCourse));

router.get("/:reviewId", wrapAsync(readReview));

router.post("/", wrapAsync(createReview));

router.put("/rating", wrapAsync(updateRating));

router.put("/", wrapAsync(updateReview));

router.delete("/", wrapAsync(deleteReview));

export default router;
