import express from "express";
const router = express.Router({ mergeParams: true });

import { createCourse, deleteCourse, readCourse, updateCourse } from "../controllers/course.js";
import { wrapAsync } from "../utils/index.js";

router.get("/", wrapAsync(readCourse));

router.post("/", wrapAsync(createCourse));

router.put("/", wrapAsync(updateCourse));

router.delete("/", wrapAsync(deleteCourse));

export default router;
