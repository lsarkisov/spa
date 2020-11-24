import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Select, Input, Button } from 'lib'
import { quoteAction } from 'actions/stock'
import { QuoteStockAssets } from 'types'

function Convertor() {
  const [quoteNames, setQuoteNames] = useState<string[]>([])
  const [result, setResult] = useState<number | undefined>()
  const [from, setFrom] = useState<number>(0)
  const [to, setTo] = useState<number>(0)
  const [amount, setAmount] = useState<string | undefined>('')
  const { quote } = useSelector((state: any) => state.stockQuote)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!quote) {
      dispatch(quoteAction({ action: 'quote' }))
    } else {
      quote.assets.forEach((q: QuoteStockAssets) => {
        setQuoteNames((qn) => [...qn, q.asset])
      })
    }
  }, [quote, setQuoteNames, dispatch])

  const onCalculate = () => {
    if (amount) {
      const { assets } = quote
      setResult(
        (parseFloat(assets[from].quote) / parseFloat(assets[to].quote)) *
          parseFloat(amount),
      )
    }
  }

  return (
    <div className="stock__convertor">
      {quote && (
        <div className="stock__convertor-wrapper">
          <div className="relative">
            <Input
              label="Сумма"
              type="text"
              value={amount}
              onChange={setAmount}
              error={false}
            />
            <div className="stock__convertor-result">
              {result && (
                <dl>
                  <dt>Итого</dt>
                  <dd>{result.toFixed(2)}</dd>
                </dl>
              )}
            </div>
          </div>
          <Select options={quoteNames} onClick={setFrom} />
          <Select options={quoteNames} onClick={setTo} />
          <Button onClick={onCalculate}>Рассчитать</Button>
        </div>
      )}
    </div>
  )
}

export default Convertor
