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
import { BaseLayout } from "../shared/ui"
import { Header } from "../widgets/header"
import { Content } from "../shared/ui"
import Routes from "../pages/Routes"
import Menu from "../pages/Routes/Menu"
const path = new URL(homepage)
const history = createBrowserHistory(
  process.env.NODE_ENV === "production"
    ? { basename: path.pathname }
    : undefined
)

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
            <BaseLayout>
              <Header>
                <Menu />
              </Header>
              <Content>
                <Routes />
              </Content>
            </BaseLayout>
          </Router>
        </Suspense>
      </ColorSchemeProvider>
    </Provider>
  )
}
