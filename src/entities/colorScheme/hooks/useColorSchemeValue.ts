import { useEffect } from "react"
import { ColorSchemes } from ".."
import { useMediaQuery } from "../../../shared/hooks/useMediaQuery"
import { useStorageState } from "../../../shared/hooks/useStorageState"

export const useColorSchemeValue = (): [
  ColorSchemes,
  (theme: ColorSchemes) => void,
  () => void
] => {
  const isDark = useMediaQuery("(prefers-color-scheme: dark)")
  const [
    colorScheme,
    setColorScheme,
    setColorSchemeState,
    isDefault,
    clearStorage,
  ] = useStorageState<ColorSchemes>(
    "colorScheme",
    isDark ? ColorSchemes.dark : ColorSchemes.light
  )

  useEffect(() => {
    isDefault &&
      setColorSchemeState(isDark ? ColorSchemes.dark : ColorSchemes.light)
  }, [isDark])

  return [colorScheme, setColorScheme, clearStorage]
}
