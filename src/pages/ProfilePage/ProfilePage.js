import React, { useState } from "react"
import { useSelector } from "react-redux"
import { CardComponent, InputComponent, PageTitleComponent } from "../../components"
import { ProfileIcon } from "../../assets/icons/NavIcons/ProfileIcon"

import "./ProfilePage.scss"

export const ProfilePage = () => {
    const user = useSelector((state) => state?.user?.data?.user)
    const [avatar, setAvatar] = useState(user?.avatar || "")
    const [lastName, setLastName] = useState(user?.lastName || "")
    const [firstName, setFirstName] = useState(user?.firstName || "")
    const [secondName, setSecondName] = useState(user?.secondName || "")
    const [email, setEmail] = useState(user?.email || "")
    const [phone, setPhone] = useState(user?.phone || "")

    const handlerLastName = (e) => setLastName(e.target.value)
    const handlerFirstName = (e) => setFirstName(e.target.value)
    const handlerSecondName = (e) => setSecondName(e.target.value)
    const handlerEmail = (e) => setEmail(e.target.value)
    const handlerPhone = (e) => setPhone(e.target.value)

    const onPhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0]
            setAvatar(URL.createObjectURL(img))
        }
    }

    const token = localStorage.getItem("AccessToken")

    // console.log("localStorage ProfilePage", token)
    return (
        <div className="profilePage">
            <PageTitleComponent title="Профиль пользователя" />
            <CardComponent>
                <form>
                    <div className="inputWrapper">
                        <label>Фамилия</label>
                        <InputComponent placeholder="Введите фамилию" />
                    </div>
                    <div className="inputWrapper">
                        <label>Имя</label>
                        <InputComponent placeholder="Введите имя" />
                    </div>
                    <div className="inputWrapper">
                        <label>Отчество</label>
                        <InputComponent placeholder="Введите отчество" />
                    </div>
                    <div className="inputWrapper">
                        <label>E-mail</label>
                        <InputComponent placeholder="Введите E-mail" />
                    </div>
                    <div className="inputWrapper">
                        <label>Мобильный</label>
                        <InputComponent placeholder="Введите мобильный телефон" />
                    </div>
                    <div className="avatarWrapper">
                        {avatar ? <ProfileIcon width={122} height={122} /> : <ProfileIcon width={122} height={122} />}
                    </div>
                    <label className="inputFileWrapper">
                        <input type="file" className="inputTypeFile" onChange={onPhotoChange} />
                        добавить изображение
                    </label>
                </form>
            </CardComponent>
        </div>
    )
}
