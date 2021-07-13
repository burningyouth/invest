import { Provider, defaultTheme, ProgressCircle } from "@adobe/react-spectrum"
import { createBrowserHistory } from "history"
import { lazy, Suspense } from "react"
import { Router } from "react-router-dom"
import { ThemeProvider, useThemeContextValue } from "../features/theme"
import "./globals.css"
const history = createBrowserHistory()

const Routes = lazy(() => import("../pages/Routes"))

export default () => {
  const [theme, setTheme] = useThemeContextValue()
  return (
    <Provider theme={defaultTheme} colorScheme={theme as any} height="100%">
      <ThemeProvider theme={theme} setTheme={setTheme}>
        <Suspense
          fallback={<ProgressCircle aria-label="Loading…" isIndeterminate />}
        >
          <Router history={history}>
            <Routes />
          </Router>
        </Suspense>
      </ThemeProvider>
    </Provider>
  )
}
