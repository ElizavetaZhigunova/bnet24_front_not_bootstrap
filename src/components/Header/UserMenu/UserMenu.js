import React from "react"
import { CardComponent } from "../../CardComponent/CardComponent"

import "./UserMenu.scss"

const UserMenu = (props) => {
    // return (
    //     <Card className={`user-menu ${props.visible ? "visible" : "hidden"}`}>
    //         <Card.Text>
    //             <Link className="user-menu__link">Настройки</Link>
    //         </Card.Text>
    //         <Card.Text>
    //             <Link className="user-menu__link">Изменить пароль</Link>
    //         </Card.Text>
    //     </Card>

    // )
    return (
        <div className={`userMenu ${props.visible ? "visible" : "hidden"}`}>
            <CardComponent>
                <nav>
                    <span className="user-menu__link">Настройки</span>
                    <span className="user-menu__link">Изменить пароль</span>
                </nav>
            </CardComponent>
        </div>
    )
}

export default UserMenu
