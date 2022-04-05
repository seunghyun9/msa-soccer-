require('dotenv').config();
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); 
const APP = './app/routes'
require(`${APP}/board.route`)({url:'/api/board',app})
require(`${APP}/todo.route`)({url:'/api/todo',app})
require(`${APP}/user.route`)({url:'/api/user',app})
require(`${APP}/game.route`)({url:'/api/game',app})
require(`${APP}/admin.route`)({url:'/api/admin',app})
require(`${APP}/basic.route`)({url:'/api/basic',app})

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

  app.listen(port, () => {
    console.log('***************** ***************** *****************')
    console.log('***************** ***************** *****************')
    console.log('********** 서버가 정상적으로 실행되고 있습니다 *********')
    console.log('***************** ***************** *****************')
    console.log('***************** ***************** *****************')
  })


app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})

function caculator(num1,opcode,num2){
  /*const {num1,opcode,num2} = payload*/
  let _num1 = Number(num1);
  let _num2 = Number(num2);
  let _opcode = opcode;
  var result = {num1, opcode, num2}
  if (opcode == "+") {
    result.res = _num1 + _num2 }
  else if (opcode == "-") {
    result.res = _num1 - _num2 }
  else if (opcode == "*") {
    result.res = _num1 * _num2 }
  else if (opcode == "/") {
    result.res = _num1 / _num2 }
  else if (opcode == "%") {
    result.res = _num1 % _num2 }
  return result
  }

app.post("/api/basic/calc", (req, res)=>{
  const {num1, opcode, num2} = req.body
  const json = caculator(num1, opcode, num2)
  res.json(json)
})


app.post("/api/user/sign-up", (req, res)=>{
  const {username, password, name, telephone} = req.body
  console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
  console.log(`ID : ${username}`)
  console.log(`PASSWORD : ${password}`)
  console.log(`NAME : ${name}`)
  console.log(`TEL : ${telephone}`)
  res.json(req.body)
})