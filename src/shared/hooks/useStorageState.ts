import { useState } from "react"

export const useStorageState = <ValueType = any>(
  key: string,
  defaultValue?: any
): [ValueType, (value: ValueType) => void] => {
  if (typeof window.localStorage === "undefined")
    throw Error("Обновите браузер, чтобы воспользоваться этим приложением")

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      return defaultValue
    }
  })
  const setValue = (value: ValueType) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (e) {}
  }

  return [storedValue, setValue]
}
