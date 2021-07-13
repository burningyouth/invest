import { useEffect, useState } from "react"

export const useMediaQuery = (query: string) => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined")
    throw Error("Обновите браузер, чтобы воспользоваться этим приложением")

  const mediaQuery = window.matchMedia(query)
  const [match, setMatch] = useState(Boolean(mediaQuery.matches))

  useEffect(() => {
    const handler = () => setMatch(Boolean(mediaQuery.matches))
    mediaQuery.addEventListener("change", handler)
    return () => mediaQuery.removeEventListener("change", handler)
  }, [])

  return match
}
