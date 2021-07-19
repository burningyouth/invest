export type NumberFormatProps = {
  children: number
  formatter: Intl.NumberFormat
}

export default ({ children, formatter }: NumberFormatProps) => {
  return formatter.format(children)
}
