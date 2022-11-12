import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		question: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Question",
		},
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
);

// answerSchema.virtual("comId").get(function () {
// 	return this._id;
// });
// answerSchema.virtual("userId").get(function () {
// 	return this.user;
// });

export default mongoose.model("Answer", answerSchema);
