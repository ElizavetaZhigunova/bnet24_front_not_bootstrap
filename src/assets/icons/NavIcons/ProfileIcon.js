import React from "react"

export const ProfileIcon = (props) => {
    return <img src={require("./avatar.png")} width={props.width || 55} height={props.height || 55} alt="avatar" />
}
