import React, { useState, useEffect } from "react"

import "./Clock.scss"

const Clock = () => {
    const [time, setTime] = useState(
        new Intl.DateTimeFormat("ru", {
            hour: "numeric",
            minute: "2-digit",
        }).format(new Date())
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(
                new Intl.DateTimeFormat("ru", {
                    hour: "numeric",
                    minute: "2-digit",
                }).format(new Date())
            )
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return <div className="clock">{time}</div>
}

export default Clock
