import React, { useState } from "react"
import { ArrowUpIcon } from "../../assets/icons/AppIcons/ArrowUpIcon"
import { ContragentIcon } from "../../assets/icons/AppIcons/ContragentIcon"

import "./AccordionComponent.scss"
import { RubIcon } from "../../assets/icons/AppIcons/RubIcon"
import { ScuIcon } from "../../assets/icons/AppIcons/ScuIcon"
import { WeightIcon } from "../../assets/icons/AppIcons/WeightIcon"
import { AmountIcon } from "../../assets/icons/AppIcons/AmountIcon"
import { ArrowDownIcon } from "../../assets/icons/AppIcons/ArrowDownIcon"

export const AccordionComponent = () => {
    const [showBody, setShowBody] = useState(false)

    const handlerShowAccordionBody = () => setShowBody(!showBody)

    const sumOrdersData = [
        {
            icon: <RubIcon />,
            data: "32 000",
        },
        {
            icon: <ScuIcon />,
            data: "15 SCU",
        },
        {
            icon: <WeightIcon />,
            data: "300 кг",
        },
        {
            icon: <AmountIcon />,
            data: "3 шт",
        },
    ]

    return (
        <div className="accordionComponent">
            <div className="accordionComponentHeader" onClick={() => console.log("click")}>
                <div className="accordionComponentHeaderAction">
                    <div className="accordionComponentHeaderActionTitle">
                        <ContragentIcon />
                        <span>Контрагент №1</span>
                    </div>
                    <div className="accordionComponentHeaderActionButton" onClick={handlerShowAccordionBody}>
                        {showBody ? <ArrowUpIcon /> : <ArrowDownIcon />}
                    </div>
                </div>
                <div className="accordionComponentHeaderData">
                    {sumOrdersData.map((el) => {
                        return (
                            <div key={el.data} className="accordionComponentHeaderDataItem">
                                <span className="itemIcon">{el.icon}</span>
                                <span className="itemData">{el.data}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={`accordionComponentBody ${showBody ? "visible" : "hidden"}`}>
                <div className="accordionComponentBodyItem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem iusto, fuga, vero rem
                    recusandae magni impedit ea, asperiores facere magnam ipsa nulla necessitatibus eos ut voluptates
                    nemo deserunt sunt!
                </div>
                <div className="accordionComponentBodyItem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem iusto, fuga, vero rem
                    recusandae magni impedit ea, asperiores facere magnam ipsa nulla necessitatibus eos ut voluptates
                    nemo deserunt sunt!
                </div>
            </div>
        </div>
    )
}
