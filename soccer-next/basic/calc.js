import axios from "axios";
import React, { useState } from "react";
export default function Calc() {

    const [inputs, setInputs] = useState({})
    const { num1, num2, opcode} = inputs

    const handlechange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs,[name]: value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('http://localhost:5000/api/basic/calc', inputs)
        .then(res => {
            const calc = res.data
            document.getElementById('result-span').innerHTML = `
            <h3>숫자1 : ${calc.num1}</h3>
            <h3>연산 : ${calc.opcode} </h3>
            <h3>숫자2 : ${calc.num2}</h3>
            <h3>계산결과 : ${calc.res}</h3>
            `
        })
        .catch(err => alert(err))
    }

    return (<>
        <h1>계산기</h1>
        <form action=""onSubmit={handleSubmit}>

            <label htmlFor="">num1</label>
            <input name="num1" type="text" onChange={handlechange} /> <br />

            <label htmlFor="">연산자</label>
            <select name="opcode" onChange={handlechange} >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <option value="%">%</option>
            </select><br />

            <label htmlFor="">num2</label>
            <input name="num2" type="text" onChange={handlechange} /><br />

            <input type="submit" value="계산하기" /><br />
        </form>
        <div>결과 : <span id="result-span"></span></div>
    </>
    )
}
