// const redis = require('redis');
// const client = redis.createClient();

// client.on('connect',()=>{
//     console.log("Client Connected to redis........")
// })

// client.on('ready',()=>{
//     console.log("Client Connected to redis and reday to use........")
// })

// client.on('error',(err)=>{
//     console.log("Redis Connection Error :---->".err.message)
// })


const redis = require('redis');
const client = redis.createClient();

client.connect();

client.on('connect',()=> console.log("Client Connected to redis........"))

client.on('error', (err) => console.log('Redis Client Error', err));

module.exports=client;

