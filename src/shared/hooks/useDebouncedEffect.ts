import { useEffect } from "react"

export const useDebouncedEffect = (
  cb: React.EffectCallback,
  delay: number,
  deps?: React.DependencyList
) => {
  useEffect(() => {
    const handler = setTimeout(cb, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [delay, deps])
}
