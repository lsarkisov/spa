import React from 'react'
import { Select, Tabs } from 'lib'
import Logout from 'components/logout'

const tabs = [
  {
    title: 'Курсы валют',
    nav: ['Валютная пара', 'Котировка ', 'Дата получения'],
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
        <div className="table">
          <ul className="row">
            <li>1 test 1</li>
            <li>123</li>
            <li>test</li>
          </ul>
          <ul className="row">
            <li>aligns all child elements</li>
            <li>aligns all child</li>
            <li>test</li>
          </ul>
        </div>

        <table>
          <tbody>
            <tr>
              <td>2 test 2</td>
              <td>123</td>
            </tr>
            <tr>
              <td>abc 2</td>
              <td>456</td>
            </tr>
          </tbody>
        </table>

        <Select
          options={['CAD', 'CHF', 'EUR', 'GBP', 'JPY']}
          onClick={(i) => console.log(i)}
        />
      </Tabs>
    </div>
  )
}

export default Stock
