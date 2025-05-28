var express = require("express");
var router = express.Router();
const db = require("../models");
const TasksService = require("../services/TaskService");
const taskService = new TasksService(db);
/* GET users listing. */

router.post("/", async function (req, res, next) {
  try {
    const { taskname, taskdescription } = req.body;
    await taskService.create(taskname, taskdescription);
    const data = await taskService.getAll();
    res.render("tasks", { data: data });
  } catch (error) {
    console.warn(error);
    next(error);
  }
});
router.get("/", async function (req, res, next) {
  try {
    const data = await taskService.getAll();
    console.log(data[0]?.dataValues);
    res.render("tasks", { data: data });
  } catch (error) {
    console.warn(error);
    next(error);
  }
});

module.exports = router;
