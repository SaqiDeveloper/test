const express = require('express');
const router = express.Router();
const User = require('../../models/User')
const Employees = require('../../handlers/employees/index');
const redisMiddleWare = require('../../middlewares/middleware')

router.post('/add-data',Employees.AddData)

router.get('/get-data', redisMiddleWare, Employees.getData)

router.get('/clear-data', Employees.clearRedis)

router.put('/put-data',Employees.updateData)

router.delete('/del-data', Employees.deleteData)

router.get('/join-data', Employees.SelFJoin)

module.exports = router