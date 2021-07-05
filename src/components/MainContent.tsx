import { Flex, View } from "@adobe/react-spectrum"
import { JSXElementConstructor, ReactElement } from "react"

export type MainContentProps = {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactElement<any, string | JSXElementConstructor<any>>[]
}

export default ({ children }: MainContentProps) => {
  return (
    <View
      height="calc(100vh - 48px)"
      overflow="auto"
      UNSAFE_style={{ padding: "24px 8px" }}
    >
      <Flex gap="size-100" height="200vh">
        {children}
      </Flex>
    </View>
  )
}
