require('dotenv').config();
var cors =require('cors')
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const { port, MONGO_URI } = process.env;
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSucessStaus: 200
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

app.listen(port, () => {
  console.log({"현재 시간 : ":new Date().toLocaleString()})
})


app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
app.get('/', (req, res) => {
  res.json({"현재 시간 : ":new Date().toLocaleString()})
})
app.get('/api/now', cors(corsOptions),(req, res) => {
  res.json({"now":new Date().toLocaleString()})
})
app.post("/api/board/write", (req, res)=>{
  const {passengerId, name, teamId, subject } = req.body
  console.log(`넘어온 JSON값: $${ JSON.stringify(req.body) }`)
  console.log(`passengerId 값 : ${passengerId}`)
  console.log(`name 값 : ${name}`)
  console.log(`teamId 값 : ${teamId}`)
  console.log(`subject 값 : ${subject}`)
  res.json(req.body)
})

app.post("/api/basic/bmi", (req, res)=>{
  const {name, height, weight } = req.body
  console.log(`넘어온 JSON값: $${ JSON.stringify(req.body) }`)
  console.log(`name 값 : ${name}`)
  console.log(`height 값 : ${height}`)
  console.log(`weight 값 : ${weight}`)
  res.json(req.body)
})

function computBMI({name,height,weight}){
  let_height=Number(height)
  let_weight=Number(weight)
  let bmi = _weight/Math.pow(_height,2);
  let output = Math.round(bmi *100)/100;
  const result ={name,height,weight}
  if (output < 18.5)
  result.bmi = "Underweight"
  if (output > 18.5 && output<=25 )
  result.bmi = "Normal"
  if (output >=25 && output<=30)
  result.bmi = "Obese"
  if (output >30)
  result.bmi = "Overweight"
  return result
}