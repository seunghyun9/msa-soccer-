import axios from "axios"
import React, { useState } from 'react';
export default function SignUp(){
    const [inputs, setInputs] = useState({})
    const {name} = inputs
    const handlechange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }
    const handleSubmit = e => {
        e.preventDefault()
        alert(`${name}님의 회원가입을 축하합니다.`)
        axios.post('http://localhost:5000/api/user/sign-up', inputs)
        .then(res => {
            const signup = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>${signup.name}님의 회원가입을 축하합니다.</h3>
            `
        })
        .catch(err => alert(err))
    }

    return (
        <form action="" onSubmit={handleSubmit} >
    <h1>회원가입폼</h1>
    <div>
    <label htmlFor=""><b>사용자 ID</b></label>
    <input type="text" name='username' onChange={handlechange}/><br />

    <label htmlFor=""><b>비밀번호</b></label>
    <input type="text" name='password'onChange={handlechange}/><br />

    <label htmlFor=""><b>이름</b></label>
    <input type="text" name='name' onChange={handlechange}/><br />

    <label htmlFor=""><b>전화번호</b></label>
    <input type="text" name='telephone' onChange={handlechange}/><br />

    <input type="submit" value="전송" /><button>취 소</button><br />
    <div><span id="result-span"></span></div>
    </div>
    </form>
   )}    
