import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import { ExpressError } from "./utils/index.js";

import CourseRouter from "./routers/course.js";

const app = express();

dotenv.config();
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/hackumass";
const PORT = process.env.PORT || 5000;

// 'mongodb://localhost:27017/habits-tracker'
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log("Database connected");
});

app.listen(PORT, () => {
	console.log(`Serving on port ${PORT}`);
});

//bodyParser supports req.body
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());

app.use("/api/course", CourseRouter);

app.all("*", (req, res, next) => {
	next(new ExpressError("Page not found", 404));
});

app.use((err, req, res, next) => {
	const { statusCode = 500 } = err;
	if (!err.message) err.message = "Something went wrong!";
	res.status(statusCode);
	res.json({ status: statusCode, message: err.message });
});
