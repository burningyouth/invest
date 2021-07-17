import { ru } from "date-fns/locale"
import { View } from "@adobe/react-spectrum"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"
import classes from "./chart.module.scss"

const months: any[] = []
for (let i = 0; i < 12; i++) {
  months.push(ru.localize?.month(i))
}

const data = [
  {
    uv: 4000.55,
  },
  {
    uv: 4444.33,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },

  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },

  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },

  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },

  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
  {
    uv: 3500,
  },
  {
    uv: 2444,
  },
  {
    uv: 1470,
  },
  {
    uv: 1400,
  },
  {
    uv: 4000,
  },
  {
    uv: 4444,
  },
  {
    uv: 4500,
  },
  {
    uv: 4700,
  },
]

const formatter = new Intl.NumberFormat("ru", {
  minimumSignificantDigits: 2,
  currency: "RUB",
  currencyDisplay: "symbol",
  style: "currency",
})

export default () => {
  return (
    <ResponsiveContainer className={classes.container}>
      <LineChart width={500} height={300} data={data}>
        <Tooltip
          active={true}
          labelClassName={classes.tooltipLabel}
          wrapperClassName={classes.tooltipWrapper}
          position={{ x: 0, y: 0 }}
          cursor={{ stroke: "var(--spectrum-global-color-chart-cursor)" }}
          formatter={(value: string) => formatter.format(+value)}
        />

        <Line
          dot={false}
          type="monotone"
          dataKey="uv"
          stroke="var(--spectrum-global-color-chart-line)"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
