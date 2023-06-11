import React from "react"

import "./CardComponent.scss"

export const CardComponent = (props) => {
    return <div className={`cardComponent ${props.className}`}>{props.children}</div>
}
