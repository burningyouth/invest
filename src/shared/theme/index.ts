import dark from "./colors/dark.module.css"
import light from "./colors/light.module.css"
import { Theme } from "@react-types/provider"
import { defaultTheme } from "@adobe/react-spectrum"

export let basicTheme: Theme = {
  ...defaultTheme,
  light,
  dark,
}
