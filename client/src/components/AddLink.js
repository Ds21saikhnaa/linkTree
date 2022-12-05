import React, { useState } from 'react';
import { sendRequest } from '../utils/Api';
export const AddLink = () => {
    const [addInput, setAddInput] = useState({
        title: "",
        link: "",
    });
    const { title, link } = addInput;
    let cat = localStorage.getItem('userInfo');
    const add = async () => {
        cat = cat.slice(1, cat.length - 1);
        try{
            const { data }  = await sendRequest(`createLink/`, "POST", addInput, cat);
            alert(data.success);
        }catch(e){
            alert(e.message.toString());
        }
    };
    return (
        <div style={styles.containar}>
            <input style={styles.inp} placeholder="name"
            value={title} 
            onChange={(e) => {setAddInput({ ...addInput, title: e.target.value})}}/>
            <input style={styles.inp} placeholder="link"
            value={link} 
            onChange={(e) => {setAddInput({ ...addInput, link: e.target.value})}}/>
            <button style={styles.btn} onClick={add}>add</button>
        </div>
    )
}

const styles = {
    containar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "60%",
        width: "50%",
        borderRadius: 30,
        flexDirection: "column",
        backgroundColor: "gray"
    },
    inp: {
        height: 40,
        width: 400,
        marginTop: 30,
        borderRadius: 20
    },
    btn: {
        height: 40,
        width: 200,
        marginTop: 30,
        borderRadius: 20
    }
}