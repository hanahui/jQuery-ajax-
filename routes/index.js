var express = require('express');
var router = express.Router();
//引入数据库连接
var db = require('../model/db')
//引入模型
var student = require('../model/Student')
var a = 0
router.get('/', function (req, res) {
   a++
    if(a/2<100){
        //每次刷新添加一条数据，最多刷新一百条数据
        var newStudent = new student({
            name:"hanahui",
            age:"21",
            gender:"男",
            tel:"15226161302"
        });
        newStudent.save();
    }else {return};
        var all = parseInt(req.query.page)
        student.find().count().then(function (call) {
            student.find().limit(all).then(function (data) {
                res.json({data: data,count:call});
            })
        })

    // console.log(student.find().count());
    // console.log(req.query)
    console.log(a)
});
module.exports = router;

