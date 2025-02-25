var express = require("express");
var router = express.Router();
const db = require("../models");
const TasksService = require("../services/TaskService");
const taskService = new TasksService(db);
/* GET users listing. */
router.post("/", async function (req, res, next) {
  // TODO: get data from request and create task in database
  // const {taskname, taskdescription, taskuserid} = req.body;
  // const createTask = await taskService.create("Task", "Task description", 1);
  res.render("tasks", { data: "pass in data from the database" });
});
router.get("/", async function (req, res, next) {
  // TODO: pass the data to frontend
  // const data = await taskService.getAll();
  res.render("tasks", { data: "pass in data from the database" });
});

module.exports = router;
