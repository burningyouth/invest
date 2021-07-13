import { Provider, ProgressCircle } from "@adobe/react-spectrum"
import { createBrowserHistory } from "history"
import { lazy, Suspense } from "react"
import { Router } from "react-router-dom"
import { ThemeProvider, useThemeContextValue } from "../features/theme"
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
  const [theme, setTheme, clearStorage] = useThemeContextValue()
  return (
    <Provider theme={basicTheme} colorScheme={theme as any} height="100%">
      <ThemeProvider
        theme={theme}
        setTheme={setTheme}
        clearStorage={clearStorage}
      >
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
