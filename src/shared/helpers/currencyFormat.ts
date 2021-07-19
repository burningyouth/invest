const ruFormatter = new Intl.NumberFormat("ru", {
  minimumSignificantDigits: 2,
  currency: "RUB",
  currencyDisplay: "symbol",
  style: "currency",
})

const enFormatter = new Intl.NumberFormat("en", {
  minimumSignificantDigits: 2,
  currency: "USD",
  currencyDisplay: "symbol",
  style: "currency",
})

const euFormatter = new Intl.NumberFormat("EU", {
  minimumSignificantDigits: 2,
  currency: "EUR",
  currencyDisplay: "symbol",
  style: "currency",
})

export type CurrencyLocales = "ru" | "en" | "eu"

export const getCurrencyFormatter = (locale: CurrencyLocales) => {
  switch (locale) {
    case "ru":
      return ruFormatter
    case "en":
      return enFormatter
    case "eu":
      return euFormatter
    default:
      return ruFormatter
  }
}
