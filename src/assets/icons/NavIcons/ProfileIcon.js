import React from "react"

export const ProfileIcon = (props) => {
    return <img src={require("./avatar.png")} width={props.width || 65} height={props.height || 65} alt="avatar" />
}
