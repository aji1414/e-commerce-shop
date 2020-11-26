import React from "react";
import "./MenuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`${size} menu-item`}>
            <div
                className="background-image"
                style={{
                    "background-image": `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <div className='title'>{title.toUpperCase()}</div>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem