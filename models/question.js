import mongoose from "mongoose";

const questionSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		course: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		answer: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
		upvote: {
			type: Number,
			default: 0,
		},
		downvote: {
			type: Number,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Question", questionSchema);
