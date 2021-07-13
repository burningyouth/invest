import { useContext } from "react"
import { ThemeContext, ThemeProviderProps } from "../components/ThemeProvider"
import { Themes } from "../types"

export const useTheme = (): [Themes, (theme: Themes) => void] => {
  const { theme, setTheme } = useContext<ThemeProviderProps>(ThemeContext)
  return [theme, setTheme]
}
