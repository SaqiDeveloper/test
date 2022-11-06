const { ConstraintViolationError } = require('objection');
const client = require('./Redis')

const redisMiddleWare = async (req, res, next) => {
    const data = await client.get("rediskey");
    if (data) {
        console.log('Data From Redis Server')
        const d = JSON.parse(data);
        console.log('dddddddddd----->',d['products']);
        d['products'].map((result) =>{
           
            console.log(result.id);
        }) 
        
        res.send(d['products'])
    } else {
        console.log('Next Function called.............')
        next();
    }

}
module.exports = redisMiddleWare;