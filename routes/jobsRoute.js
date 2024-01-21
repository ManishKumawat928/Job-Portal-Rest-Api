import express from "express";
import userAuth from "../middlewares/authMiddleware.js";
import { createJobController, deleteJobController, getAllJobController, jobStatsController, updateJobController } from "../controllers/jobsController.js";
const router = express.Router();

// routes
// post
router.post("/create-job", userAuth,createJobController);


// get
router.get("/get-jobs",userAuth,getAllJobController)

// update
router.patch('/update-job/:id',userAuth,updateJobController)

// delete
router.delete('/delete-job/:id',userAuth,deleteJobController)

// jobs stats filter
router.get('/job-stats',userAuth,jobStatsController)


export default router;
