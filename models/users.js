import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		courseTaken: [
			{
				type: Schema.Types.ObjectId,
				ref: "Course",
			},
		],
	},
	{
		timestamps: true,
	}
);

export default mongoose.model("User", userSchema);
