import { Flex, View } from "@adobe/react-spectrum"
import Header from "../header"

export type LayoutProps = {
  children: React.ReactNode
  menuItems: React.ReactNode
}

export default ({ children, menuItems }: LayoutProps) => {
  return (
    <Flex direction="column" height="100%" gap="size-200">
      <Header>{menuItems}</Header>
      <View height="100%" overflow="auto" position="relative">
        <>{children}</>
      </View>
    </Flex>
  )
}
