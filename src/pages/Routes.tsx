import { Switch, Route } from "react-router-dom"
import { lazy } from "react"
import { MenuList } from "../shared/components"
import { Item } from "@adobe/react-spectrum"

const Error = lazy(() => import("./Error"))
const Settings = lazy(() => import("./Settings"))
const Layout = lazy(() => import("../widgets/layout"))
const Ticker = lazy(() => import("./Ticker"))

export default () => {
  return (
    <Layout
      menuItems={
        <MenuList>
          <Item key="/">Главная</Item>
          <Item key="/ticker">Тикер</Item>
          <Item key="/settings">Настройки</Item>
        </MenuList>
      }
    >
      <Switch>
        <Route exact path="/">
          Main
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
        <Route exact path="/ticker/:query?">
          <Ticker />
        </Route>
        <Route exact path="/portfolio/new">
          New portfolio
        </Route>
        <Route exact path="/portfolio/:id">
          Portfolio
        </Route>
        <Route exact path="/portfolio/:id/:ticker">
          Portfolio ticker
        </Route>
        <Route path="*">
          <Error
            heading="Страницы не существует"
            content="Наверное, вы перешли по неправильной ссылке."
            buttons={["goBack"]}
          />
        </Route>
      </Switch>
    </Layout>
  )
}
