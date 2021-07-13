import { useStorageState } from "../../../shared/hooks/useStorageState"
import { Themes } from "../types"

export const useThemeContextValue = (): [Themes, (theme: Themes) => void] => {
  const [theme, setTheme] = useStorageState<Themes>(
    "colorScheme",
    window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"
  )
  return [theme, setTheme]
}
