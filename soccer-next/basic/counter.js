import React, {useState} from "react";
import { useSelector,useDispatch } from 'react-redux';
import styles from 'basic/style/counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0)
  /*** 
  const count= useSelector(selectCount)
  const dispatch = useDispatch()
  const [ incrementAmount, setIncreamentAmount] = useState('0')
  const incrementValue = Number(incrementAmount) || 0
 */
  return (<>
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}  