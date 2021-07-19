import { createContext, ReactNode } from "react"
import { ColorSchemes } from "../config"

export type ColorSchemeProviderProps = {
  colorScheme: ColorSchemes
  setColorScheme: (theme: ColorSchemes) => void
  clearStorage: () => void
  children?: ReactNode
}

export const ColorSchemeContext = createContext<
  Pick<
    ColorSchemeProviderProps,
    "setColorScheme" | "colorScheme" | "clearStorage"
  >
>({
  colorScheme: ColorSchemes.dark,
  setColorScheme: () => {},
  clearStorage: () => {},
})

export const ColorSchemeProvider = ({
  children,
  ...value
}: ColorSchemeProviderProps) => {
  return (
    <ColorSchemeContext.Provider value={value}>
      {children}
    </ColorSchemeContext.Provider>
  )
}
