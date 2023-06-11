import React from "react"
import { CardComponent, PageTitleComponent, SearchComponent, SwitchBoxComponent } from "../../components"

import "./OrdersPage.scss"
import { AccordionComponent } from "../../components"

export const OrdersPage = () => {
    const navInputs = [
        {
            value: "incoming",
            text: "входящие",
        },
        {
            value: "active",
            text: "активные",
        },
        {
            value: "shipped",
            text: "отгруженные",
        },
    ]

    return (
        <div className="ordersPage">
            <PageTitleComponent title="Заказы клиентов" />
            <SwitchBoxComponent navInputs={navInputs} badge={true} active="incoming" />
            <CardComponent className="orderBoxComponent">
                <SearchComponent />
                <div className="accordions">
                    <AccordionComponent />
                    <AccordionComponent />
                    <AccordionComponent />
                </div>
            </CardComponent>
        </div>
    )
}
