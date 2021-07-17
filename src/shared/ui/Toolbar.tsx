import { View } from "@adobe/react-spectrum"
import { BasicComponentProps } from "./types"

export type ToolbarProps = BasicComponentProps

export default ({ children }: ToolbarProps) => {
  return (
    <View
      position="absolute"
      bottom={0}
      left={0}
      borderTopWidth="thin"
      borderColor="gray-300"
      padding="size-150"
      width="100%"
    >
      {children}
    </View>
  )
}
