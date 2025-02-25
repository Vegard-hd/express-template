var express = require("express");
var router = express.Router();
const db = require("../models");
const TasksService = require("../services/TaskService");
const taskService = new TasksService(db);
/* GET users listing. */
router.post("/", async function (req, res, next) {
  const { taskname, taskdescription } = req.body;
  await taskService.create(taskname, taskdescription);
  const data = await taskService.getAll();
  res.render("tasks", { data: data });
});
router.get("/", async function (req, res, next) {
  // TODO: pass the data to frontend
  const data = await taskService.getAll();
  console.log(data[0]?.dataValues);
  console.log(data?.task?.dataValues?.name);
  res.render("tasks", { data: data });
});

module.exports = router;
