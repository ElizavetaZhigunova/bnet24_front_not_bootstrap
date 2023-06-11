import React from "react"
import { ButtonComponent } from "../ButtonComponent/ButtonComponent"
import { InputComponent } from "../InputComponent/InputComponent"
import { SearchIcon } from "../../assets/icons/AppIcons/SearchIcon"

import "./SearchComponent.scss"

export const SearchComponent = () => {
    return (
        <div className="searchComponent">
            <InputComponent placeholder="Найти" icon={<SearchIcon />} />
            <ButtonComponent title="Найти" />
        </div>
    )
}
