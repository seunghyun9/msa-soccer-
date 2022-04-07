import axios from "axios"
import React, { useState } from 'react';
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
            <tr className={styles.tr}>
            { data.length == 0  ?<td colSpan={colspan} className={styles.td}>데이터가 없습니다</td>
                :<td colSpan={colspan} className={styles.td}>데이터가 있습니다</td>}
            </tr>
        </tbody>
        </table>
);
}
export default function UserList(){
    const columns = [ "username", "password", "name", "telephone"];
    const data = []
    const count = data.length
    return(<>
        <h1>사용자 목록</h1>
        {count!=0 && <h3>회원수 : {count} 명</h3>}
        <div className={styles.td}>
        <Table columns={columns} colspan={4} data={data}/>
        </div>
    </>)
}
//{/**columns.map((x)=> (<th key={column} className={styles.td}>{x}</th>))*/}