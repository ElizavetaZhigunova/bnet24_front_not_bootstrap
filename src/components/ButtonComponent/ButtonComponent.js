import React from "react"

import "./ButtonComponent.scss"

export const ButtonComponent = (props) => {
    return (
        <div className={`buttonComponent ${props.className}`} onClick={props.onClick}>
            {props.title}
        </div>
    )
}
