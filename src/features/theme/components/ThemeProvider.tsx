import { createContext, ReactNode } from "react"
import { Themes } from "../types"

export type ThemeProviderProps = {
  theme: Themes
  setTheme: (theme: Themes) => void
  children?: ReactNode
}

export const ThemeContext = createContext<
  Pick<ThemeProviderProps, "setTheme" | "theme">
>({
  theme: "dark",
  setTheme: () => {},
})

export const ThemeProvider = ({
  theme,
  setTheme,
  children,
}: ThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
