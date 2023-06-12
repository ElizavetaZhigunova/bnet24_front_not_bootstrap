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
                    <div style={{display: "flex"}}> 
                        <div className="icon-container f"><div className="icon"></div></div>
                        <div className="icon-inc">3</div>
                        <span className="user-menu__link">Почта</span>
                    </div>
                    <div style={{display: "flex"}}> 
                        <div className="icon-container s"><div className="icon"></div></div>
                        <div className="icon-inc">3</div>
                        <span className="user-menu__link">Сообщения</span>
                    </div>
                    <div style={{display: "flex"}}> 
                        <div className="icon-container t"><div className="icon"></div></div>
                        <div className="icon-inc">3</div>
                        <span className="user-menu__link">Уведомления</span>
                    </div>
                    <div style={{display: "flex"}}> 
                        <div className="icon-container fo"><div className="icon"></div></div>
                        
                        <span className="user-menu__link">Поиск</span>
                    </div>
                    <div style={{display: "flex"}}> 
                        <div className="icon-container fi"><div className="icon"></div></div>
                        
                        <span className="user-menu__link">Настройки</span>
                    </div>
                    <div style={{display: "flex"}}> 
                        <div className="icon-container si"><div className="icon"></div></div>
                        
                        <span className="user-menu__link">Изменить пароль</span>
                    </div>
                </nav>
            </CardComponent>
        </div>
    )
}

export default UserMenu
