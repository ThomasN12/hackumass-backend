import Comment from "../models/comment.js";
import Course from "../models/course.js";
import Review from "../models/review.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const createComment = async (req, res, next) => {
	const { content, course, user, review } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findById(course);
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const foundReview = await Review.findById(review);
	if (!foundReview) {
		throw new ExpressError("Review not found", 404);
	}
	const comment = new Comment({ content, course, user, review });
	await comment.save();
	res.status(200).json({ status: 200, message: "Comment created", data: comment });
};

export const readComment = async (req, res, next) => {
	const { id } = req.body;
	const comment = await Comment.findById(id);
	if (!comment) {
		throw new ExpressError("Comment not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: comment });
};

export const updateComment = async (req, res, next) => {
	const { content, course, user, review } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundCourse = await Course.findById(course);
	if (!foundCourse) {
		throw new ExpressError("Course not found", 404);
	}
	const foundReview = await Review.findById(review);
	if (!foundReview) {
		throw new ExpressError("Review not found", 404);
	}
	const comment = await Comment.findById(id);
	if (!comment) {
		throw new ExpressError("Comment not found", 404);
	}
	await comment.updateOne({ content });
	await comment.save();
	res.status(200).json({ status: 200, message: "Comment updated", data: commentSchema });
};

export const deleteComment = async (req, res, next) => {
	const { id } = req.body;
	const comment = await Comment.findById(id);
	if (!comment) {
		throw new ExpressError("Comment not found", 404);
	}
	await comment.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Comment deleted", data: comment });
};
