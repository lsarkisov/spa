import React, { useState } from 'react'
import { Select, Input, Button } from 'lib'

function Convertor() {
  const [amount, setAmount] = useState<string | undefined>('100')

  return (
    <div className="stock__convertor">
      <div className="stock__convertor-wrapper">
        <Input
          label="Сумма"
          type="text"
          value={amount}
          onChange={setAmount}
          error={false}
        />
        <Select
          options={['CAD', 'CHF', 'EUR', 'GBP', 'JPY']}
          onClick={(i) => console.log(i)}
        />
        <Select
          options={['CAD', 'CHF', 'EUR', 'GBP', 'JPY']}
          onClick={(i) => console.log(i)}
        />
        <Button>Рассчитать</Button>
      </div>
    </div>
  )
}

export default Convertor
