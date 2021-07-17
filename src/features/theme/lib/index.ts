type Color = string
type Version = string

export type Palette = {
  status: Color
  colorVersion: Version
  celery400: Color
  celery500: Color
  celery600: Color
  celery700: Color
  chartreuse400: Color
  chartreuse500: Color
  chartreuse600: Color
  chartreuse700: Color
  yellow400: Color
  yellow500: Color
  yellow600: Color
  yellow700: Color
  magenta400: Color
  magenta500: Color
  magenta600: Color
  fuchsia400: Color
  fuchsia500: Color
  fuchsia600: Color
  fuchsia700: Color
  purple400: Color
  purple500: Color
  purple600: Color
  purple700: Color
  indigo400: Color
  indigo500: Color
  indigo600: Color
  indigo700: Color
  gray50: Color
  gray75: Color
  gray100: Color
  gray200: Color
  gray300: Color
  gray400: Color
  gray500: Color
  gray600: Color
  gray700: Color
  gray800: Color
  gray900: Color
}

export type MappedTheme = {
  palette: Palette
}

//FIXME Сделать все цвета и исправить уже добавленные
export const mapTheme = (theme: CSSStyleDeclaration): MappedTheme => {
  return {
    palette: {
      status: theme
        .getPropertyValue("--spectrum-global-color-status")
        .trimStart(),
      colorVersion: theme
        .getPropertyValue("--spectrum-global-color-version")
        .trimStart(),
      celery400: theme
        .getPropertyValue("--spectrum-global-color-celery-400")
        .trimStart(),
      celery500: theme
        .getPropertyValue("--spectrum-global-color-celery-500")
        .trimStart(),
      celery600: theme
        .getPropertyValue("--spectrum-global-color-celery-600")
        .trimStart(),
      celery700: theme
        .getPropertyValue("--spectrum-global-color-celery-700")
        .trimStart(),
      chartreuse400: theme.getPropertyValue(
        "--spectrum-global-color-chartreuse-400"
      ),
      chartreuse500: theme.getPropertyValue(
        "--spectrum-global-color-chartreuse-500"
      ),
      chartreuse600: theme.getPropertyValue(
        "--spectrum-global-color-chartreuse-600"
      ),
      chartreuse700: theme.getPropertyValue(
        "--spectrum-global-color-chartreuse-700"
      ),
      yellow400: theme
        .getPropertyValue("--spectrum-global-color-yellow-400")
        .trimStart(),
      yellow500: theme
        .getPropertyValue("--spectrum-global-color-yellow-500")
        .trimStart(),
      yellow600: theme
        .getPropertyValue("--spectrum-global-color-yellow-600")
        .trimStart(),
      yellow700: theme
        .getPropertyValue("--spectrum-global-color-yellow-700")
        .trimStart(),
      magenta400: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      magenta500: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      magenta600: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      fuchsia400: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      fuchsia500: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      fuchsia600: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      fuchsia700: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      purple400: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      purple500: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      purple600: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      purple700: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      indigo400: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      indigo500: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      indigo600: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      indigo700: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      gray50: theme
        .getPropertyValue("--spectrum-global-color-gray-50")
        .trimStart(),
      gray75: theme
        .getPropertyValue("--spectrum-global-color-gray-75")
        .trimStart(),
      gray100: theme
        .getPropertyValue("--spectrum-global-color-gray-100")
        .trimStart(),
      gray200: theme
        .getPropertyValue("--spectrum-global-color-gray-200")
        .trimStart(),
      gray300: theme
        .getPropertyValue("--spectrum-global-color-gray-300")
        .trimStart(),
      gray400: theme
        .getPropertyValue("--spectrum-global-color-gray-400")
        .trimStart(),
      gray500: theme
        .getPropertyValue("--spectrum-global-color-gray-500")
        .trimStart(),
      gray600: theme
        .getPropertyValue("--spectrum-global-color-gray-600")
        .trimStart(),
      gray700: theme
        .getPropertyValue("--spectrum-global-color-gray-700")
        .trimStart(),
      gray800: theme
        .getPropertyValue("--spectrum-global-color-gray-800")
        .trimStart(),
      gray900: theme
        .getPropertyValue("--spectrum-global-color-gray-900")
        .trimStart(),
    },
  }
}
