import React from "react"
import { BadgeComponent } from "../BadgeComponent/BadgeComponent"

import "./RadioInputComponent.scss"

export const RadioInputComponent = (props) => {
    return (
        <div className={`radioInputComponent ${props.checked ? "active" : "disabled"}`}>
            <label>
                <input
                    type="radio"
                    value={props.value}
                    name="orders"
                    checked={props.checked}
                    onChange={props.onChange}
                />
                {props.text}
            </label>
            {props.badge && <BadgeComponent active={props.checked ? true : false} />}
        </div>
    )
}
