import mongoose from "mongoose";
import Answer from "./answer.js";
import User from "./users.js";

const questionSchema = new mongoose.Schema(
	{
		text: {
			type: String,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
		course: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
		replies: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Answer",
			},
		],
	},
	{
		timestamps: true,
		toObject: { virtuals: true },
		toJSON: { virtuals: true },
	}
);

questionSchema.virtual("comId").get(function () {
	return this._id;
});

// questionSchema.virtual("userId").get(function () {
// 	return this.user.toString();
// });

// questionSchema.virtual("fullName").get(function () {
// 	const foundUser = User.findById(this.user, function (err, user) {

// 	});

// });

questionSchema.post("findOneAndDelete", async function (doc) {
	if (doc) {
		await Answer.deleteMany({
			_id: doc.answers,
		});
	}
});

export default mongoose.model("Question", questionSchema);
