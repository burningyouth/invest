import { useState } from "react"

export const useStorageState = <ValueType = any>(
  key: string,
  defaultValue?: any
): [
  ValueType,
  (value: ValueType) => void,
  (value: ValueType) => void,
  boolean,
  () => void
] => {
  if (typeof window.localStorage === "undefined")
    throw Error("Обновите браузер, чтобы воспользоваться этим приложением")

  const item = window.localStorage.getItem(key)

  const [storedValue, setStoredValue] = useState(() => {
    return item ? JSON.parse(item) : defaultValue
  })
  const setValue = (value: ValueType) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    window.localStorage.setItem(key, JSON.stringify(valueToStore))
  }
  const clearStorage = () => {
    window.localStorage.removeItem(key)
  }

  return [storedValue, setValue, setStoredValue, !Boolean(item), clearStorage]
}
