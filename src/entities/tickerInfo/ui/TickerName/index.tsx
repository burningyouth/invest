import { Heading } from "@adobe/react-spectrum"
import { BasicComponentProps } from "../../../../shared/ui/types"

export type TickerNameProps = BasicComponentProps

export default ({ children }: TickerNameProps) => {
  return <Heading level={1}>{children}</Heading>
}
