import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: true,
		},
		course: {
			type: Schema.Types.ObjectId,
			ref: "Course",
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		question: {
			type: Schema.Types.ObjectId,
			ref: "Answer",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Question", answerSchema);
