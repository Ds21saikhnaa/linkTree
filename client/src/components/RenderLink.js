import React from 'react';
export const RenderLink = ({link}) => {
    return (
        <div style={styles.containar}>
            {link.map((el, ind) => (
                <div style={styles.one} key={ind}>
                    <a style={styles.link} href={el.link}>
                        <p>{el.title}</p>
                    </a>
                </div>
            ))}
        </div>
    )
}

const styles = {
    containar: {
        marginTop: 20,
        height: "60%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    one:{
        height: 56,
        width: 676,
        backgroundColor: "#D69564",
        marginTop: 30,
        borderRadius: 30,
        border: "2px solid rgb(214, 149, 100)",
        textAlign: "center"
    },
    link: {
        textDecoration: "none",
        color: "rgb(249, 207, 163)"
    }
}