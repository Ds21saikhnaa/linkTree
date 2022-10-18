import React, { useEffect, useState } from 'react';
import { sendRequest } from '../utils/Api';
export const LoginScreen = () => {
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });

    const { email, password } = loginInput;
    const cat = localStorage.getItem('userInfo');
    useEffect(() => {
        if (cat) {
            document.location.href = '/'
        }
    }, [cat])
    const login = async () => {
        try{
            const { data }  = await sendRequest(`login/`, "POST", loginInput);
            localStorage.setItem('userInfo', JSON.stringify(data.token));
            document.location.href = '/'
        }catch(e){
            alert(e.message.toString());
            // console.log(e.message.toString());
        }
    };
    return (
        <div>
            <input 
                placeholder="email"
                value={email} 
                onChange={(e) => {setLoginInput({ ...loginInput, email: e.target.value})}}
            />
            <input
                placeholder="password"
                type={"password"}
                value={password} 
                onChange={(e) => {setLoginInput({ ...loginInput, password: e.target.value})}}
            />
            <button onClick={login}>login</button>
        </div>
    )
}