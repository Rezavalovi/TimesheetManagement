const projectController = require('../controllers/projectController');


const projectRouter = require('express').Router();

projectRouter.get("/", projectController.getAll);
projectRouter.post("/", projectController.addProject);
// projectRouter.get("/UserId/:id",  projectController.getAllByUserid);
projectRouter.post("/", projectController.searchProject);
projectRouter.delete("/:id", projectController.delete);
projectRouter.put("/:id", projectController.updateProject);


module.exports = projectRouter