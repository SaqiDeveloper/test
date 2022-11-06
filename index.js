const express = require('express');
const mysql = require('mysql');
const UserRoutes = require('./routes/employees/index')
const app = express();
const port = 4000;

app.use(UserRoutes);

app.listen(port, () => {
    console.log(`Server is listening at Port ${port}`)
})