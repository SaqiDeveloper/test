const { Op , QueryTypes} = require("sequelize");
const User = require('../../models/User')
const student = require('../../models/student')
const teacher = require('../../models/teacher')
const subject = require('../../models/subject')
const Salary = require('../../models/salary');
const sequelize = require("../../dbConfig/config");

const client = require('../../middlewares/Redis')
const axios = require('axios');

const AddData = (req, res) => {

    const resp = teacher.bulkCreate([
        {
            teachername: 'Adnan Waheed',
            subjectId : 1,
        },
        {
            teachername: 'Waseem Younas',
            subjectId : 2,
        },
        {
            teachername: 'Zaeem Nazir',
            subjectId : 3,
        },
        {
            teachername: 'Sohail Khan',
            subjectId : 4,
        }
    ])

    // const resp = subject.bulkCreate([
    //     {
    //         name: 'Programming',
    //     },
    //     {
    //         name: 'DCN',
    //     },
    //     {
    //         name: 'HCI',
    //     },
    //     {
    //         name: 'Web Development',
    //     }
    // ])
    res.send({ Msg: 'Server Working Fine', Res: resp });
}

const getData = async (req, res) => {

    console.log('Live data fetched.............')

    const resp = await axios.get('https://dummyjson.com/products')
    client.set('rediskey',JSON.stringify(resp.data)
    // ,{EX: 10}
    )

    res.send(resp.data);
}

const clearRedis = (req,res)=>{
    client.DEL("rediskey")
    res.send('Redis Cleared')
}

const updateData = async (req, res) => {

    const resp = await student.update({ teacherId: 11 },
        {
            where: {
                teacherId: 3
            }
        }
    );
    res.send({ Msg: 'Done', Data: resp });
}

const deleteData = async (req, res) => {

    const resp = await teacher.destroy({ where: { id: {[Op.like] : '%'} } });
    res.send({ Msg: 'Done', Data: resp });
}

const SelFJoin = async (req, res) => {

    // const resp = await User.destroy({ where: { idrows: 4 } });
    // res.send({ Msg: 'Done', Data: resp });

    // const meta = await sequelize.query('SELECT a.name Name , b.name Humage  FROM employees a RIGHT JOIN employees b ON a.age = b.age and A.name='+"'Waqas'",{
    //     type: QueryTypes.SELECT
    // })
    // res.send({ Msg: 'Done', Data: meta });

    student.findAll({
        attributes: ['studentname',[sequelize.literal('teacher.teachername'), 'SrName']],
        raw:true,
        include: [{ model: teacher , attributes: []}] 
    }).then(posts => {
        res.json(posts);
    });
    
}

module.exports = {
    AddData, getData, updateData, deleteData, SelFJoin ,clearRedis
}