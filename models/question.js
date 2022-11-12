import mongoose from "mongoose";
import Answer from "./answer.js";

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

questionSchema.post("findOneAndDelete", async function (doc) {
	if (doc) {
		await Answer.deleteMany({
			_id: doc.answers,
		});
	}
});

export default mongoose.model("Question", questionSchema);
