import { Line } from "react-chartjs-2"
import { ru } from "date-fns/locale"
import { View } from "@adobe/react-spectrum"
import { Chart } from "chart.js"
const months: any[] = []
for (let i = 0; i < 12; i++) {
  months.push(ru.localize?.month(i))
}
const elem = document.body.querySelector("#root > div")
const style = elem && getComputedStyle(elem!)
const color =
  style?.getPropertyValue("--spectrum-global-color-gray-800") ?? "gray"
const lineHeight =
  style?.getPropertyValue("--spectrum-alias-body-text-line-height") ?? 1
Chart.defaults.font = {
  family:
    "adobe-clean-ux,adobe-clean,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif",
  lineHeight,
  size: 12,
  weight: "normal",
  style: "normal",
}

console.log(color)

Chart.defaults.color = color
export default () => {
  return (
    <View marginStart="size-100" marginEnd="size-100">
      <Line
        data={{
          labels: months,
          datasets: [
            {
              label: "My First Dataset",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              position: "bottom",

              labels: {
                font: {
                  color: "var(--spectrum-global-color-gray-100)",
                },
              },
            },
          },
        }}
        type="line"
      />
    </View>
  )
}
