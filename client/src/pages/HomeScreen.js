import React from 'react';
import { AddLink } from '../components';
export const HomeScreen = () => {
    const out = () => {
        localStorage.removeItem("userInfo");
    }
    return(
        <div style={styles.containar} >
            <AddLink />
            <button onClick={out}>log out</button>
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
    }
}