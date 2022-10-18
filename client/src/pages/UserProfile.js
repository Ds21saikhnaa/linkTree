import React, { useEffect, useState } from "react";
import { RenderLink, UserInfo } from '../components';
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
        <div style={styles.containar}>
            <div style={styles.mini}>
                <UserInfo user={link[0]?.userId}/>
                <RenderLink link={link}/>
            </div>
        </div>
    )
}

const styles = {
    containar: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#FFFFCC"
    },
    mini: {
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "50%",
    }
}