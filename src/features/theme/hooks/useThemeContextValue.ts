import { useEffect } from "react"
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery"
import { useStorageState } from "../../../shared/hooks/useStorageState"
import { Themes } from "../types"

export const useThemeContextValue = (): [
  Themes,
  (theme: Themes) => void,
  () => void
] => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)")
  const [theme, setTheme, setThemeState, isDefault, clearStorage] =
    useStorageState<Themes>("colorScheme", isDark ? "dark" : "light")

  useEffect(() => {
    isDefault && setThemeState(isDark ? "dark" : "light")
  }, [isDark])

  return [theme, setTheme, clearStorage]
}
