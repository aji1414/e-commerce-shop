// external libraries and stylesheet
import React from "react";
import "./FormInput.styles.scss";

// components used

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input className="form-input" onChange={handleChange} {...otherProps} />
        {label ?
            (<label className={`${otherProps.length ? "shrink" : ""} form-input-label`}>
                {label}
            </label>)
            : null
        }
    </div>
);


export default FormInput;

