import { ActionButton } from "@adobe/react-spectrum"
import Moon from "@spectrum-icons/workflow/Moon"
import Remove from "@spectrum-icons/workflow/Remove"
import Light from "@spectrum-icons/workflow/Light"
import { useState } from "react"
import { useColorScheme } from "../hooks/useColorScheme"
import { ColorSchemes } from "../config"

export const ColorSchemeButton = () => {
  const [theme, setTheme, clearStorage] = useColorScheme()
  const [counter, setCounter] = useState(0)
  return counter < 2 ? (
    theme === "dark" ? (
      <ActionButton
        aria-label="Светлая тема"
        onPress={() => {
          setTheme(ColorSchemes.light)
          setCounter((counter) => ++counter)
        }}
      >
        <Light />
      </ActionButton>
    ) : (
      <ActionButton
        aria-label="Темная тема"
        onPress={() => {
          setTheme(ColorSchemes.dark)
          setCounter((counter) => ++counter)
        }}
      >
        <Moon />
      </ActionButton>
    )
  ) : (
    <ActionButton
      aria-label="Как в системе"
      onPress={() => {
        clearStorage()
        setCounter(0)
      }}
    >
      <Remove />
    </ActionButton>
  )
}
