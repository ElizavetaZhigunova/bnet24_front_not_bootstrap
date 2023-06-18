import React from "react"

import "./InputComponent.scss"

export const InputComponent = (props) => {
    return (
        <div className={`inputComponent ${props.className}`}>
            <div className="inputComponentIcon">{props.icon}</div>
            <input onBlur={props.onBlur} type={props.type} placeholder={props.placeholder}  />
        </div>
    )
}
