import React from "react";

export const UserInfo = ({user}) => {
    //console.log(user);
    return(
        <div style={styles.container}>
            <div style={styles.circle}></div>
            <div style={{marginTop: 20, color: "#D69564", fontSize: 20}}>{user?.name}</div>
        </div>
    )
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
        // height: "100vh",
        // width: "100vw",
    },
    circle:{
        height: 100,
        width: 100,
        border: "1px solid black",
        borderRadius: 50,
        backgroundColor: "red"
    }
}