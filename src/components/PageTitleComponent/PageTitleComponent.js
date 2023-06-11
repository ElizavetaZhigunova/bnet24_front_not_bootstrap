import React from "react"

import "./PageTitleComponent.scss"

export const PageTitleComponent = (props) => {
    return (
        <div className={`pageTitleComponent ${props.className}`}>
            <span>{props.title}</span>
        </div>
    )
}
