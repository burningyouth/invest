import { useContext } from "react"
import { ThemeContext, ThemeProviderProps } from "../components/ThemeProvider"
import { Themes } from "../types"

export const useTheme = (): [Themes, (theme: Themes) => void, () => void] => {
  const { theme, setTheme, clearStorage } =
    useContext<ThemeProviderProps>(ThemeContext)
  return [theme, setTheme, clearStorage]
}
