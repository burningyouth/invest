import { useCallback } from "react"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent"
import classes from "./chart.module.scss"

export type ChartData = {
  name: NameType
  value: ValueType
}

export type LineChartProps = {
  data: ChartData[]
  onMouseMove?: (data: ChartData) => void
}

export default ({ data: dataFromProps, onMouseMove }: LineChartProps) => {
  const contentHandler = useCallback(
    (data) => {
      if (onMouseMove && dataFromProps.length > 0) {
        const last = dataFromProps[dataFromProps.length - 1]
        if (data.payload && data.payload[0])
          onMouseMove({
            value: data.payload[0].payload.value!,
            name: data.payload[0].payload.name!,
          })
        else
          onMouseMove({
            value: last.value,
            name: last.name,
          })
      }

      return null
    },
    [dataFromProps, onMouseMove]
  )
  return (
    <ResponsiveContainer className={classes.container}>
      <LineChart width={500} height={300} data={dataFromProps}>
        <Tooltip
          content={contentHandler}
          cursor={{ stroke: "var(--spectrum-global-color-chart-cursor)" }}
        />

        <Line
          type="monotone"
          className={classes.chart}
          dot={false}
          dataKey="value"
          stroke="var(--spectrum-global-color-chart-line)"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
