import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();

dotenv.config();
const dbUrl = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

// 'mongodb://localhost:27017/habits-tracker'
mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

//bodyParser supports req.body 
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'build')));
app.use(cors());


