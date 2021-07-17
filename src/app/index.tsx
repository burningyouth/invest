import { Provider, ProgressCircle } from "@adobe/react-spectrum"
import { createBrowserHistory } from "history"
import { lazy, Suspense } from "react"
import { Router } from "react-router-dom"
import {
  ColorSchemeProvider,
  useColorSchemeValue,
} from "../entities/colorScheme"
import "./globals.css"
import { homepage } from "../../package.json"
import { basicTheme } from "../shared/theme"
const path = new URL(homepage)
const history = createBrowserHistory(
  process.env.NODE_ENV === "production"
    ? { basename: path.pathname }
    : undefined
)

const Routes = lazy(() => import("../pages/Routes"))

export default () => {
  const [colorScheme, setColorScheme, clearStorage] = useColorSchemeValue()
  return (
    <Provider theme={basicTheme} colorScheme={colorScheme} height="100%">
      <ColorSchemeProvider
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        clearStorage={clearStorage}
      >
        <Suspense
          fallback={<ProgressCircle aria-label="Loading…" isIndeterminate />}
        >
          <Router history={history}>
            <Routes />
          </Router>
        </Suspense>
      </ColorSchemeProvider>
    </Provider>
  )
}
