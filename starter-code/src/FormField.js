// FormField.js
import React from "react";

const formfield = (props) => {
    return (
          <div className="field">
            <label className="label">{props.label}</label>
            <div className="control">
              <input className="input" type={props.type} placeholder={props.placeholder}/>
          </div>
        </div>
    )
}

export default formfield;