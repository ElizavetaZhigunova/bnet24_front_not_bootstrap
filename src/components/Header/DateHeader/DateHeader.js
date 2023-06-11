import React, { useState, useEffect } from "react"

import "./DateHeader.scss"

const DateHeader = () => {
    const [weekday, setWeekday] = useState(new Intl.DateTimeFormat("ru", { weekday: "long" }).format(new Date()))
    const [date, setDate] = useState(
        new Intl.DateTimeFormat("ru", { day: "numeric", month: "long" }).format(new Date())
    )

    useEffect(() => {
        const interval = setInterval(() => {
            setWeekday(new Intl.DateTimeFormat("ru", { weekday: "long" }).format(new Date()))
            setDate(new Intl.DateTimeFormat("ru", { day: "numeric", month: "long" }).format(new Date()))
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="date">
            <span>{weekday.charAt(0).toUpperCase() + weekday.slice(1)}</span>
            <span>{date}</span>
        </div>
    )
}

export default DateHeader
