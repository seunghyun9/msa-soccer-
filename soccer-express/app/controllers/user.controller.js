exports.singup= (req, res)=>{
    const {username, password, name, telephone} = req.body
    console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
    console.log(`ID : ${username}`)
    console.log(`PASSWORD : ${password}`)
    console.log(`NAME : ${name}`)
    console.log(`TEL : ${telephone}`)
    res.status(200).json({'result':'ok'})
  }