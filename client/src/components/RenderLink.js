import React from 'react';
export const RenderLink = ({link}) => {
    return (
        <div>
            {link.map((el, ind) => (
                <div key={ind}>
                    <a href={el.link}>{el.title}</a>
                </div>
            ))}
        </div>
    )
}