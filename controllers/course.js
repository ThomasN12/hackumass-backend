import Course from "../models/course.js";

import { ExpressError } from "../utils/index.js";

export const createCourse = async (req, res, next) => {
	const { fullName, codeName, major } = req.body;
	const course = new Course({ fullName, codeName, major });
	await course.save();
	res.status(200).json({ status: 200, message: "Course created", data: course });
};

export const readCourse = async (req, res, next) => {
	const { id } = req.body;
	const course = await Course.findById(id);
	if (!course) {
		throw new ExpressError("Course not found", 404);
	}
	res.status(200).json({ status: 200, message: "", data: course });
};

export const updateCourse = async (req, res, next) => {
	const { id, fullName, codeName, major } = req.body;
	const course = await Course.findById(id);
	if (!course) {
		throw new ExpressError("Course not found", 404);
	}
	await course.updateOne({ fullName, codeName, major });
	await course.save();
	res.status(200).json({ status: 200, message: "Course updated", data: course });
};

export const deleteCourse = async (req, res, next) => {
	const { id } = req.body;
	const course = await Course.findById(id);
	if (!course) {
		throw new ExpressError("Course not found", 404);
	}
	await course.findByIdAndDelete(id);
	res.status(200).json({ status: 200, message: "Course updated", data: course });
};
