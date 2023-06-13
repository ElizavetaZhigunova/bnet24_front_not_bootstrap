import React from 'react'
import { CardComponent, SearchComponent } from '../../components'

import './CompaniesListPage.scss'

export const CompaniesListPage = () => {
  return (
    <>
    <span className='companies-title'>Наши организации</span>
    <SearchComponent/>
    <CardComponent>
      <div className='btns-remove-edit'>уд ред</div>
      <div className='companies-container'>
        <div className="left-side-companies">
          <span className="name-companies">ООО, Рога и Копыта</span>
          <div className='items-companies'>
            <span>Руководитель</span>
            <span></span>
          </div>
          <div className='items-companies'>
            <span>Бухгалтер</span>
            <span></span>
          </div>
          <div className='items-companies'>
            <span>ИНН/КПП</span>
            <span></span>
          </div>
          <div className='about-companies'>127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2</div>
          <div className='items-companies'>
            <span>Телефоны</span>
            <span></span>
          </div>
          <div className='items-companies'>
            <span>E-mail</span>
            <span></span>
          </div>
          <div className='items-companies'>
            <span>Сайт</span>
            <span></span>
          </div>
        </div>
        <div className="right-side-companies">
          <div className="img-companies">photo</div>
        </div>
      </div>
    </CardComponent>
    </>
  )
}

