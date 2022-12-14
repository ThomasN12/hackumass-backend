import Answer from "../models/answer.js";
import Course from "../models/course.js";
import Question from "../models/question.js";
import User from "../models/users.js";

import { ExpressError } from "../utils/index.js";

export const createAnswer = async (req, res, next) => {
	const { text, user, question, fullName, avatarUrl } = req.body;
	const foundUser = await User.findById(user);
	if (!foundUser) {
		throw new ExpressError("User not found", 404);
	}
	const foundQuestion = await Question.findById(question);
	if (!foundQuestion) {
		throw new ExpressError("Question not found", 404);
	}
	const answer = new Answer({ text, user, question, fullName, avatarUrl });
	foundQuestion.replies.push(answer)
	await answer.save();
	await foundQuestion.save()
	res.status(200).json({ status: 200, message: "Answer created", data: answer });
};

export const getAnswersByQuestion = async (req, res, next) => {
	const { question } = req.query;
	const answers = await Answer.find({ question }).populate({
		path: "user",
		select: ["email", "fullName"],
	});
	res.status(200).json({ status: 200, message: "", data: answers || [] });
};

export const readAnswer = async (req, res, next) => {
	const { id } = req.body;
	const answer = await Answer.findById(id).populate({
		path: "user",
		select: ["email", "fullName"],
	});
	if (!answer) {
		throw new ExpressError("Answer not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: answer });
};

export const updateRating = async (req, res, next) => {
	const { id, upvote, downvote } = req.body;
	const answer = await Answer.find({ _id: id }).populate({
		path: "user",
		select: ["email", "fullName"],
	});
	if (answer.length === 0) {
		throw new ExpressError("Review not found", 404);
	}
	await answer.updateOne({ upvote, downvote });
	await answer.save();
	res.status(200).json({ status: 200, message: "Answer rating updated", data: answer[0] });
};

export const updateAnswer = async (req, res, next) => {
	const { id, content } = req.body;
	const answer = await Answer.find({ _id: id }).populate({
		path: "user",
		select: ["email", "fullName"],
	});
	if (answer.length === 0) {
		throw new ExpressError("Answer not found", 404);
	}
	await answer.updateOne({ content });
	await answer.save();
	res.status(200).json({ status: 200, message: "Answer updated", data: answer[0] });
};

export const deleteAnswer = async (req, res, next) => {
	const { id } = req.body;
	const answer = await Answer.findById(id).populate({
		path: "user",
		select: ["email", "fullName"],
	});
	if (answer.length === 0) {
		throw new ExpressError("Answer not found", 404);
	}
	await answer.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Answer deleted", data: answer });
};
