//THIS FILE IS USED TO CREATE INITIAL DATA IN THE DATABASE
import mongoose from 'mongoose';
import { courses } from './seedsHelper.js'
import Course from '../models/course.js'
const dbUrl = process.env.DB_URL || "mongodb://127.0.0.1:27017/hackumass-db";
// const dbUrl = process.env.DB_URL;

console.log(dbUrl)
mongoose.connect(dbUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

//Return a random element from an array
const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Course.deleteMany({});
    for (let i = 0; i < courses.length; ++i)
    {
        const course = new Course({
            ...courses[i]
        })
        await course.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});
