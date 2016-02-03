var express = require('express');
var router = express.Router();
var initTask = require('../model/initTask');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title : '나의 칸반보드',
    todoTasks : initTask.getTasks().todo,
    inProgressTasks : initTask.getTasks().inProgress,
    doneTasks : initTask.getTasks().done
  });
});
module.exports=router;


