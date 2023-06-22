const {createConnection}=require('mysql')

const pool=createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'form'
},console.log('Connected'))

module.exports=pool