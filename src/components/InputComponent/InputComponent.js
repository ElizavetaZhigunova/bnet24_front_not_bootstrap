import React from "react"

import "./InputComponent.scss"

export const InputComponent = (props) => {
    return (
        <div className={`inputComponent ${props.className}`}>
            <div className="inputComponentIcon">{props.icon}</div>
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
        </div>
    )
}
