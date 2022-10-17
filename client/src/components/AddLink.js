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
        <div>
            <input placeholder="name"
            value={title} 
            onChange={(e) => {setAddInput({ ...addInput, title: e.target.value})}}/>
            <input placeholder="link"
            value={link} 
            onChange={(e) => {setAddInput({ ...addInput, link: e.target.value})}}/>
            <button onClick={add}>add</button>
        </div>
    )
}