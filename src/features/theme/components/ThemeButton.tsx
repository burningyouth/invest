import { ActionButton } from "@adobe/react-spectrum"
import { useTheme } from "../hooks/useTheme"
import Moon from "@spectrum-icons/workflow/Moon"
import Remove from "@spectrum-icons/workflow/Remove"
import Light from "@spectrum-icons/workflow/Light"
import { useState } from "react"

export const ThemeButton = () => {
  const [theme, setTheme, clearStorage] = useTheme()
  const [counter, setCounter] = useState(0)
  return counter < 2 ? (
    theme === "dark" ? (
      <ActionButton
        aria-label="Светлая тема"
        onPress={() => {
          setTheme("light")
          setCounter((counter) => ++counter)
        }}
      >
        <Light />
      </ActionButton>
    ) : (
      <ActionButton
        aria-label="Темная тема"
        onPress={() => {
          setTheme("dark")
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
