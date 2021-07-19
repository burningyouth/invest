import { useContext } from "react"
import { ColorSchemes } from ".."
import {
  ColorSchemeProviderProps,
  ColorSchemeContext,
} from "../ui/ColorSchemeProvider"

export const useColorScheme = (): [
  ColorSchemes,
  (theme: ColorSchemes) => void,
  () => void
] => {
  const { colorScheme, setColorScheme, clearStorage } =
    useContext<ColorSchemeProviderProps>(ColorSchemeContext)
  return [colorScheme, setColorScheme, clearStorage]
}
