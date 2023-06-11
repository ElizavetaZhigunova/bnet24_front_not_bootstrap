import React from "react"

import "./BadgeComponent.scss"

export const BadgeComponent = (props) => {
    return (
        <div
            className={
                props.active === true
                    ? `badgeComponentActive ${props.className}`
                    : ` badgeComponentDisabled  ${props.className}`
            }
        >
            {props.text || "134"}
        </div>
    )
}
