import Course from "../models/course.js";
import review from "../models/review.js";
import Review from "../models/review.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const getReviewsByCourse = async (req, res, next) => {
	// console.log("HERE")
	const { codeName } = req.params;
	const foundCourse = await Course.findOne({ codeName }).populate("reviews").populate({
		path: 'reviews',
		populate: {
			path: 'user'
		}
	});
	const reviews = foundCourse.reviews;
	console.log(foundCourse)
	res.status(200).json({ status: 200, message: "", data: reviews || [] });
};

export const createReview = async (req, res, next) => {
	const {
		// title,
		content,
		course,
		user,
		difficultyRating,
		effortLevel,
		funRating,
		recommendRating,
		starRating,
	} = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findOne({codeName: course});
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const review = new Review({
		content,
		course: foundCourse,
		user,
		difficultyRating,
		effortLevel,
		funRating,
		recommendRating,
		starRating,
	});
	await review.save();
	foundCourse.reviews.push(review);
	await foundCourse.save();
	res.status(200).json({ status: 200, message: "Review created", data: review });
};



export const readReview = async (req, res, next) => {
	const { reviewId } = req.params;
	const review = await Review.findById(reviewId);
	if (!review) {
		throw new ExpressError("Review not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: review });
};

export const updateRating = async (req, res, next) => {
	const { id, difficultyRating, effortLevel, funRating, recommendRating } =
		req.body;
	const review = await Review.find({ _id: id });
	if (review.length === 0) {
		throw new ExpressError("Review not found", 404);
	}
	await review.updateOne({ difficultyRating, effortLevel, funRating, recommendRating });
	await review.save();
	res.status(200).json({ status: 200, message: "Review rating updated", data: review[0] });
};

export const updateReview = async (req, res, next) => {
	const { id, title, content } = req.body;
	const review = await Review.find({ _id: id });
	if (review.length === 0) {
		throw new ExpressError("Review not found", 404);
	}
	await review.updateOne({ title, content });
	await review.save();
	res.status(200).json({ status: 200, message: "Review updated", data: review[0] });
};

export const deleteReview = async (req, res, next) => {
	const { id } = req.body;
	const review = await Review.find({ _id: id });
	if (review.length === 0) {
		throw new ExpressError("Review not found", 404);
	}
	await review.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Review updated", data: review[0] });
};
