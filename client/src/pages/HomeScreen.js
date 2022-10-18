import React from 'react';
import { AddLink } from '../components';
export const HomeScreen = () => {
    return(
        <div style={styles.containar} >
            <AddLink />
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