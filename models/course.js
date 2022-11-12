import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
	{
		fullName: {
			type: String,
			required: true,
			unique: true,
		},
		codeName: {
			type: String,
			required: true,
			unique: true,
		},
		major: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
		},
		questions: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Question",
			},
		],
		description: String,
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Course", courseSchema);
