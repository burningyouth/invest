import { ru } from "date-fns/locale"
import { Heading, View } from "@adobe/react-spectrum"

import { useCallback, useState } from "react"
import { LineChart } from "../shared/ui"
import { TickerName, TickerValue } from "../entities/tickerInfo"

const months: any[] = []
for (let i = 0; i < 12; i++) {
  months.push(ru.localize?.month(i))
}

const data = [
  {
    name: "03.12.1999",
    value: 4000.55,
  },
  {
    name: "03.12.2000",
    value: 2822.85,
  },
  {
    name: "03.12.2001",
    value: 1922.46,
  },
  {
    name: "03.12.2002",
    value: 1678.93,
  },
  {
    name: "03.12.2003",
    value: 2356,
  },
  {
    name: "03.12.2004",
    value: 3676.42,
  },
  {
    name: "03.12.2005",
    value: 4676.83,
  },
  {
    name: "03.12.2006",
    value: 5668,
  },
  {
    name: "03.12.2007",
    value: 6237.21,
  },
  {
    name: "03.12.2008",
    value: 5904.42,
  },
  {
    name: "03.12.2009",
    value: 5034.56,
  },
  {
    name: "03.12.2010",
    value: 6700.25,
  },
  {
    name: "03.12.2011",
    value: 7300.45,
  },
]

export default () => {
  const [value, setValue] = useState({
    value: data[data.length - 1].value,
    date: data[data.length - 1].name,
  })

  const valueHoverHandler = useCallback(
    (data) => {
      const newValue = +data.value
      value.value !== newValue &&
        setValue({
          value: newValue,
          date: data.name,
        })
    },
    [value]
  )

  return (
    <>
      <View marginStart="size-300">
        <TickerName>Apple (AAPL)</TickerName>
        {value.date}:<TickerValue locale="eu">{value.value}</TickerValue>
      </View>
      <LineChart data={data} onMouseMove={valueHoverHandler} />
    </>
  )
}
