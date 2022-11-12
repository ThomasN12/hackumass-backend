import Course from "../models/course.js";
import Review from "../models/review.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const getReviewsByCourse = async (req, res, next) => {
	const { course } = req.query;
	const reviews = await Review.find({ course: course });
	res.status(200).json({ status: 200, message: "", data: reviews });
};

export const createReview = async (req, res, next) => {
	const { title, content, course, user } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findById(course);
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const review = new Review({ title, content, course, user });
	await review.save();
	res.status(200).json({ status: 200, message: "Review created", data: review });
};

export const readReview = async (req, res, next) => {
	const { id } = req.body;
	const review = await Review.findById(id);
	if (!review) {
		throw new ExpressError("Review not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: review });
};

export const updateRating = async (req, res, next) => {
	const { id, course, user, upvote, downvote } = req.params;
	const review = await Review.find({ _id: id, course, user });
	if (!review) {
		throw new ExpressError("Review not found", 404);
	}
	await review.updateOne({ upvote, downvote });
	await review.save();
	res.status(200).json({ status: 200, message: "Review rating updated", data: review });
};

export const updateReview = async (req, res, next) => {
	const { id, title, content, course, user } = req.body;
	const review = await Review.find({ _id: id, course, user });
	if (!review) {
		throw new ExpressError("Review not found", 404);
	}
	await review.updateOne({ title, content, course, user });
	await review.save();
	res.status(200).json({ status: 200, message: "Review updated", data: review });
};

export const deleteReview = async (req, res, next) => {
	const { id } = req.body;
	const review = await Review.findById(id);
	if (!review) {
		throw new ExpressError("Review not found", 404);
	}
	await review.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Review updated", data: review });
};
