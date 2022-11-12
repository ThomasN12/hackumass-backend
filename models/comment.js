import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
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
		review: {
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("Comment", commentSchema);
