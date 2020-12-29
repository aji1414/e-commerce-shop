// external libraries and stylesheet
import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItem.styles.scss";

// Components needed

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => {
    return (
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
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

export default withRouter(MenuItem);