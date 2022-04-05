import axios from "axios";
import style from "board/style/board-form.module.css"
import React,{useState} from 'react' 

export default function TeamForm(){
    const [inputs, setInputs] = useState({}) /*아래 setInputs과 형식을 맞춰줌 */

    const handleChange = e => { /*e는 소비자가 행동하는 액션(이벤트) 아규먼트가 상수처리가 됨*/
        e.preventDefault() /* 원래값(디폴트)값으로 돌아가는걸 막아줌 */
        const {value, name} = e.target; /* argument란 함수가 호출될 때 함수로 값을 전달해주는 값을 말합니다 
        target 속성은 이벤트가 발생한 대상 객체, 상태 데이터(이벤트 안에 변하는 공간을 줘서 상수로 만듬) */
        setInputs({...inputs, [name]: value}) /*JSON >"name": "식빵" , [name]은 변하지 않는 값(상수)이고 value 는 변하는 값(변수)  상태를 저장해줌*/
    }
    
    const handleClick = e => {
        e.preventDefault()
        alert(`등록할 게시글 : ${ JSON.stringify(inputs) }`)
        axios.post('http://localhost:5000/api/board/write', inputs)
        .then(res => {
            alert(`결과: ${res.data.result}`)
        })
        .catch(err => alert(err))
        /*axios는 출발지 app은 도착지 /가는것은 req(담겨져있음) 와서 작동하는 것은 res 
        req는 헤드와 바디로 이루어져있다. 데이터는 보통 바디에 찍혀져있음. req.body , req은 아규먼트*/
    }
    return (<>
        <h1>게시글 등록</h1>
        <div className={style.container}>
            <htmlForm action="">
            <div className={style.row}>
                <div className={style.col25}>
                <label className={style.label} htmlFor="passengerId">게시글 작성자 ID</label>
                </div>
                <div className={style.col75}>
                <input type="text" onChange={handleChange} className={style.inputText}
                id="passengerId" name="passengerId" placeholder="게시글 작성자 ID 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="name">게시글 작성자 이름</label>
                </div>
                <div className={style.col75}>
                <input type="text" onChange={handleChange} className={style.inputText}
                id="name" name="name" placeholder="게시글 작성자 이름 입력"/>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="team">응원팀</label>
                </div>
                <div className={style.col75}>
                <select id="teamId" onChange={handleChange} name="teamId">
                    <option value="">응원팀 선택</option>
                    <option value="K09">Fc seoul</option>
                    <option value="K02">Suwon Samseong blue wings</option>
                    <option value="K04">Incheon United</option>
                </select>
                </div>
            </div>
            <div className={style.row}>
                <div className={style.col25}>
                <label htmlFor="subject">게시글 내용</label>
                </div>
                <div className={style.col75}>
                <input type="textarea"  onChange={handleChange} id="subject" name="subject" style={{height:200 + "px"}}></input>
                </div>
            </div>
            <br/>
            <div className={style.row}>
                <input type="submit" onClick={handleClick} className={style.inputSubmit}
                value="Submit"/>
            </div>
            </htmlForm> 
            </div>
    </>)
}
/** style={{height:200 + "px"}} >상수값을 넣으려고 했으나 제이슨으로 넣었음 */