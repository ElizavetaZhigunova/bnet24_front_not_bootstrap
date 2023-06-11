import React, { useState } from "react"

import { BadgeComponent } from "../BadgeComponent/BadgeComponent"
import { FilterIcon } from "../../assets/icons/AppIcons/FilterIcon"

import "./FilterBoxComponent.scss"

export const FilterBoxComponent = () => {
    const [dataFilter, setDataFilter] = useState([
        {
            text: "23 ноя., 00:00 - 23 ноя., 23:59",
        },
    ])

    const addDataFilter = () => {
        setDataFilter([...dataFilter, { text: "Все зоны доставки" }])
    }
    return (
        <div className="filter-box">
            {dataFilter.map((el, index) => (
                <BadgeComponent key={index} text={el.text} className="m-1" />
            ))}
            <div onClick={addDataFilter}>
                <FilterIcon />
            </div>
        </div>
    )
}
