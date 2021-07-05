import { Provider, defaultTheme, ProgressCircle } from "@adobe/react-spectrum"
import { lazy, Suspense } from "react"

const Layout = lazy(() => import("./components/Layout"))
const Routes = lazy(() => import("./Routes"))

export default () => {
  return (
    <Provider theme={defaultTheme} colorScheme="dark">
      <Suspense
        fallback={<ProgressCircle aria-label="Loading…" isIndeterminate />}
      >
        <Layout>
          <Routes />
        </Layout>
      </Suspense>
    </Provider>
  )
}
