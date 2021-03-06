import React, { useState } from 'react'

export interface Tab {
  title: string
  nav: string[]
}

interface TabsType {
  tabs: Tab[]
  children: any
}

function Tabs(props: TabsType) {
  const { tabs } = props
  const [active, setActive] = useState<number>(0)

  return (
    <div className="tabs">
      <ul className="tabs__header">
        {tabs &&
          tabs.map((tab: Tab, index: number) => (
            <li
              key={tab.title}
              onClick={() => setActive(index)}
              className={`tabs__item ${active === index ? 'tabs__active' : ''}`}
            >
              {tab.title}
              {active === index && (
                <ul>
                  {tab.nav &&
                    tab.nav.map((nav: string, i: number) => (
                      <li key={`${nav}-${i}`}>{nav}</li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
      <div className="tabs__body">{props.children[active]}</div>
    </div>
  )
}

export default Tabs
