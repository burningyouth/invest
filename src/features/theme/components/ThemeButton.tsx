import { ActionButton } from "@adobe/react-spectrum"
import { useTheme } from "../hooks/useTheme"
import Moon from "@spectrum-icons/workflow/Moon"
import Light from "@spectrum-icons/workflow/Light"

export const ThemeButton = () => {
  const [theme, setTheme] = useTheme()
  return theme === "dark" ? (
    <ActionButton onPress={() => setTheme("light")}>
      <Light />
    </ActionButton>
  ) : (
    <ActionButton onPress={() => setTheme("dark")}>
      <Moon />
    </ActionButton>
  )
}
