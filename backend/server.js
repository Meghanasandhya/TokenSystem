const express=require('express')
const body_parser=require('body-parser')
const cors=require('cors')
const pool=require('./db')

const app=express()

app.use(body_parser.json())
app.use(body_parser.urlencoded({extended:true}))
app.use(cors())

app.post('/',function(req,res){
    var name=req.body.name
    var age=req.body.age
    var weight=req.body.weight
    var address=req.body.address
    var disease=req.body.disease
    var gender=req.body.gender

    pool.query("insert into formdata(name,age,weight,address,disease,gender) values(?,?,?,?,?,?);",[name,age,weight,address,disease,gender],function(err,res){
        
    })
})
// app.get('/token',function(req,res){
//     pool.query("select id from formdata order by desc limit 1",function(err,res){
//         if(err) throw err
//     })
// })
app.listen(4000)