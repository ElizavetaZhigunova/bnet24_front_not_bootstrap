import React from 'react'
import { CardComponent, CompanyCardComponent, SearchComponent } from '../../components'

import './CompaniesListPage.scss'

export const CompaniesListPage = () => {
  return (
    <>
    <span className='companies-title'>Наши организации</span>
    <SearchComponent/>
    <CardComponent className="card-companies">
    <CompanyCardComponent 
      name='ООО, Рога и Копыта'
      leader='Пупкин В.В.'
      accountant='Пупкин В.В.'
      inn_kpp='2102020002/1121201'
      address='127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2'
      phones='+7 (495) 123-45-67'
      email='info@site.com'
      site='www.site.com'
      img='photo'
    />
    <CompanyCardComponent 
      name='ООО, Рога и Копыта'
      leader='Пупкин В.В.'
      accountant='Пупкин В.В.'
      inn_kpp='2102020002/1121201'
      address='127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2'
      phones='+7 (495) 123-45-67'
      email='info@site.com'
      site='www.site.com'
      img='photo'
    />
    <CompanyCardComponent 
      name='ООО, Рога и Копыта'
      leader='Пупкин В.В.'
      accountant='Пупкин В.В.'
      inn_kpp='2102020002/1121201'
      address='127035, г. Москва, ул. Новый Арбат 1, оф. 3, стр. 2'
      phones='+7 (495) 123-45-67'
      email='info@site.com'
      site='www.site.com'
      img='photo'
    />
    </CardComponent>
    </>
  )
}

