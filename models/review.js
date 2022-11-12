import mongoose from "mongoose";
import Comment from "./answer.js";

const reviewSchema = new mongoose.Schema(
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
		// comments: [
		// 	{
		// 		type: Schema.Types.ObjectId,
		// 		ref: "Comment",
		// 	},
		// ],
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

// reviewSchema.post("findOneAndDelete", async function (doc) {
// 	if (doc) {
// 		await Comment.deleteMany({
// 			_id: doc.comments,
// 		});
// 	}
// });

export default mongoose.model("Review", reviewSchema);
