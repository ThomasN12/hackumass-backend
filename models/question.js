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
			type: Schema.Types.ObjectId,
			ref: "Course",
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		answers: [
			{
				type: Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Question", questionSchema);
