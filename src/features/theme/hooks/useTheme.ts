import { MappedTheme, mapTheme } from "../lib"

import { useColorScheme } from "../../../entities/colorScheme"
import { useEffect, useState } from "react"

//const elem = document.createElement("div")//

//elem.classList.add(light["spectrum-light"])//

//const mappedLight = mapTheme(getComputedStyle(elem))//

//elem.classList.add(dark["spectrum-dark"])//

//const mappedDark = mapTheme(getComputedStyle(elem))//

//console.log("map", mappedLight, mappedDark)

export const useTheme = () => {
  const [colorScheme] = useColorScheme()

  const elem = document.body.querySelector("#root > div")!
  const style = getComputedStyle(elem)
  const [theme, setTheme] = useState<MappedTheme>(mapTheme(style))

  useEffect(() => {
    const style = getComputedStyle(elem)
    setTheme(mapTheme(style))
  }, [colorScheme])

  return theme
}
