import { createContext, ReactNode } from "react"
import { Themes } from "../types"

export type ThemeProviderProps = {
  theme: Themes
  setTheme: (theme: Themes) => void
  clearStorage: () => void
  children?: ReactNode
}

export const ThemeContext = createContext<
  Pick<ThemeProviderProps, "setTheme" | "theme" | "clearStorage">
>({
  theme: "dark",
  setTheme: () => {},
  clearStorage: () => {},
})

export const ThemeProvider = ({ children, ...value }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
