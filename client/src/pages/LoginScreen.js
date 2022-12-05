import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { sendRequest } from '../utils/Api';
export const LoginScreen = () => {
    // const navigate = useNavigate();
    const [loginInput, setLoginInput] = useState({
        email: "",
        password: "",
    });

    const { email, password } = loginInput;
    const login = async () => {
        try{
            const { data }  = await sendRequest(`login/`, "POST", loginInput);
            localStorage.setItem('userInfo', JSON.stringify(data));
            // navigate("/");
            // document.location.href = '/'
        }catch(e){
            alert(e.message.toString());
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