import React from "react"

import "./InputComponent.scss"

export const InputComponent = (props) => {
    return (
        <div className={`inputComponent ${props.className}`}>
            <div className="inputComponentIcon">{props.icon}</div>
<<<<<<< Updated upstream
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur} />
=======
            <input type={props.type} name={props.name} placeholder={props.placeholder} value={props.value} onChange={props.onChange} onBlur={props.onBlur}  />
>>>>>>> Stashed changes
        </div>
    )
}
