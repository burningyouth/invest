import { Line } from "react-chartjs-2"
import { ru } from "date-fns/locale"
import { View } from "@adobe/react-spectrum"
const months: any[] = []
for (let i = 0; i < 12; i++) {
  months.push(ru.localize?.month(i))
}
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
        options={{}}
        type="line"
      />
    </View>
  )
}
