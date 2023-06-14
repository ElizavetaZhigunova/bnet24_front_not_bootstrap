import React from 'react'
import { CardComponent, SearchComponent } from '../../components'

import './CompaniesListPage.scss'

export const CompaniesListPage = () => {
  return (
    <>
    <span className='companies-title'>Наши организации</span>
    <SearchComponent/>
    <CardComponent className="card-companies">
      <div className="companies-wrapper">
        <span className='btns-remove-edit'>уд ред</span>
        <div className='companies-container'>
          <div className="left-side-companies">
            <span className="name-companies">ООО, Рога и Копыта</span>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px", marginTop: "20px"}}>Руководитель</div>
              <span style={{color: "#98999B", marginTop: "20px"}}>Пупкин В.В.</span>
            </div>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px"}}>Бухгалтер</div>
              <span style={{color: "#98999B"}}>Пупкин В.В.</span>
            </div>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px"}}>ИНН/КПП</div>
              <span style={{color: "#98999B"}}>2102020002/1121201</span>
            </div>
            <div className='about-companies'>127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2</div>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px"}}>Телефоны</div>
              <span style={{color: "#98999B"}}>+7 (495) 123-45-67</span>
            </div>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px"}}>E-mail</div>
              <span style={{color: "#98999B"}}>info@site.com</span>
            </div>
            <div className='items-companies'>
              <div style={{marginRight: "70px", width: "185px"}}>Сайт</div>
              <span style={{color: "#98999B"}}>www.site.com</span>
            </div>
          </div>
          <div className="right-side-companies">
            <div className="img-companies">photo</div>
          </div>
        </div>
      </div>
      
    </CardComponent>
    </>
  )
}

