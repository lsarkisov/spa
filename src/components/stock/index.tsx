import React from 'react'
import { Tabs } from 'lib'
import Logout from 'components/logout'
import History from './history'
import Quote from './quote'
import Convertor from './convertor'

const tabs = [
  {
    title: 'Курсы валют',
    nav: ['', 'Валютная пара', 'Котировка ', 'Дата получения'],
  },
  {
    title: 'Конвертор',
    nav: ['Конвертация валют'],
  },
  {
    title: 'История',
    nav: ['Актив', 'Начало', 'Котировка', 'Конец', 'Котировка', 'Прибыль'],
  },
]

function Stock() {
  return (
    <div className="stock">
      <Logout />
      <Tabs tabs={tabs}>
        <Quote />
        <Convertor />
        <History />
      </Tabs>
    </div>
  )
}

export default Stock
