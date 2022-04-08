import axios from "axios"
import React, { useEffect, useState } from 'react';
import styles from "user/style/UserList.module.css";
    

const Table = ({columns,colspan,data }) => {
    return (
    <table className={styles.table}>
        <thead>
            <tr className={styles.tr}>
                {columns.map(column => (<th key={column.username} className={styles.td}>{column}</th>))} 
            </tr>
        </thead>
        <tbody>
            {data.length == 0  ?<tr className={styles.tr}>
                                            <td colSpan={colspan} className={styles.td}>데이터가 없습니다</td>
                                            </tr>
                    :data.map((user) => (
                    <tr className={styles.tr}  key={user.username} >
                        <td className={styles.td}>{user.username}</td>
                        <td className={styles.td}>{user.password}</td>
                        <td className={styles.td}>{user.name}</td>
                        <td className={styles.td}>{user.telephone}</td>
                    </tr>
            ))}
        </tbody>
        </table>
);
}
export default function UserList(){

    const columns = ["Username", "Password", "Name", "Telephone"];
    const [data, setData] = useState([])
    useEffect(()=>{
      axios.get('http://localhost:5000/api/user/user-list')// inputs를 사용하면 핸들러가 되버리기 때문에 req 없이 보내도록 해야 하기 때문에 사용X
        .then(res=>{
        setData(res.data.users)
      }).catch(err=>{})
    },[])
    return(<>
        <h1>사용자 목록</h1>  
        
        <div className={styles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
        </>)
}
//{/**columns.map((x)=> (<th key={column} className={styles.td}>{x}</th>))*/}

