import React, { useEffect, useState } from "react";
import { RenderLink } from '../components';
import { useParams } from 'react-router-dom';
import { sendRequest } from "../utils/Api";
export const UserProfile = () => {
    const { userName: name } = useParams();
    const [link, setLink] = useState([]);
    const getData = async () => {
        let cat = localStorage.getItem('userInfo');
        cat = cat.slice(1, cat.length - 1);
        const { data } = await sendRequest(`getLink/${name}`, "GET", {}, cat);
        setLink(data.links);
    };
    useEffect(() => {
        getData();
    },[]);
    return (
        <div>
            <RenderLink link={link}/>
        </div>
    )
}