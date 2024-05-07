const activityController = require('../controllers/activityController');


const activityRouter = require('express').Router();

activityRouter.get("/", activityController.getAll);
activityRouter.post("/", activityController.addActivity);
activityRouter.get("/UserId/:id", activityController.getActivityById);
activityRouter.post("/:id", activityController.updateActivity);
activityRouter.delete("/:id", activityController.deleteActivity);


module.exports = activityRouter