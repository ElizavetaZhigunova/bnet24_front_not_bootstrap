import React from "react"
import { Footer, Header } from "../../components"

import "./PageLayout.scss"

const PageLayout = ({ children }) => {
    return (
        <div className="page">
            <Header />
            <div className="page__children">{children}</div>
            <Footer />
        </div>
    )
}

export default PageLayout
