import { Flex } from "@adobe/react-spectrum"
import { BasicComponentProps } from "../types"

export type BaseLayoutProps = BasicComponentProps

export default ({ children }: BaseLayoutProps) => {
  return (
    <Flex direction="column" height="100%" gap="size-200">
      <>{children}</>
    </Flex>
  )
}
