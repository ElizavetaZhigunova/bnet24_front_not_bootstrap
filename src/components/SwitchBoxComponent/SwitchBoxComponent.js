import React, { useState } from "react"
import { CardComponent, RadioInputComponent } from "../../components"
// import { Card } from "react-bootstrap"
// import { RadioInput } from "components"

import "./SwitchBoxComponent.scss"

export const SwitchBoxComponent = (props) => {
    const [value, setValue] = useState(props.active)

    const handlerChange = (e) => setValue(e.target.value)

    return (
        <CardComponent className="switchBoxComponent">
            {props.navInputs.map((el, idx) => (
                <RadioInputComponent
                    key={idx}
                    value={el.value}
                    text={el.text}
                    onChange={handlerChange}
                    checked={value === el.value}
                    badge={props.badge}
                />
            ))}
        </CardComponent>
    )
}
