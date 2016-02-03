/**
 * Created by HB02 on 2016-02-03.
 */
var initTask = require('../model/initTask');

exports.index = function (req,res) {
    res.render('index',{
        title : '나의 칸반보드',
        todoTasks : initTask.getTasks().todo,
        inProgressTasks : initTask.getTasks().inProgress,
        doneTasks : initTask.getTasks().done
    });
    /*todoTasks 은 index.jade 에서 each 문 뒤의 값과 일치해야함*/
    /*getTasks().todo 에서  todo 는 initTask 키값과 일치해야 함*/
}