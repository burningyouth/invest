import {
  CurrencyLocales,
  getCurrencyFormatter,
} from "../../../../shared/helpers/currencyFormat"

export type TickerValueProps = {
  children: number
  locale: CurrencyLocales
}

export default ({ children, locale }: TickerValueProps) => {
  const formatter = getCurrencyFormatter(locale)
  return <>{formatter.format(children)}</>
}
