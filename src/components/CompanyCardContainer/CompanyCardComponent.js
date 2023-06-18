import React from 'react'
import { CardComponent } from '../CardComponent/CardComponent'

import './CompanyCardComponent.scss'

export const CompanyCardComponent = ({ name, leader, accountant, inn_kpp, address, phones, email, site, img }) => {
  return (
    <CardComponent className="card-companies">
      <span className='btns-remove-edit'>уд ред</span>
      <div className='companies-container'>
        <div className="left-side-companies">
          <span className="name-companies">{name}</span>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px", marginTop: "20px" }}>Руководитель</div>
            <span style={{ color: "#98999B", marginTop: "20px" }}>{leader}</span>
          </div>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px" }}>Бухгалтер</div>
            <span style={{ color: "#98999B" }}>{accountant}</span>
          </div>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px" }}>ИНН/КПП</div>
            <span style={{ color: "#98999B" }}>{inn_kpp}</span>
          </div>
          <div className='about-companies'>{address}</div>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px" }}>Телефоны</div>
            <span style={{ color: "#98999B" }}>{phones}</span>
          </div>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px" }}>E-mail</div>
            <span style={{ color: "#98999B" }}>{email}</span>
          </div>
          <div className='items-companies'>
            <div style={{ marginRight: "70px", width: "185px" }}>Сайт</div>
            <span style={{ color: "#98999B" }}>{site}</span>
          </div>
        </div>
        <div className="right-side-companies">
          <div className="img-companies">{img}</div>
        </div>
      </div>
    </CardComponent>
  )
}
