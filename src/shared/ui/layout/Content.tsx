import { View } from "@adobe/react-spectrum"
import { BasicComponentProps } from "../types"

export type ContentProps = BasicComponentProps

export default ({ children }: ContentProps) => {
  return (
    <View height="100%" overflow="auto" position="relative">
      {children}
    </View>
  )
}
