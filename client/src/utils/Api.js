import axios from "axios";
import { Url } from "../constants/Network";
export const sendRequest = async (url, method, data, token) => {
    const request_url = Url + url;
    const response = await axios({
        url: request_url,
        method,
        headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        data,
    });
    return response
    //console.log(response);
};