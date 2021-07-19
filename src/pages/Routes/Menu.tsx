import { Item } from "@adobe/react-spectrum"
import MenuList from "../../shared/ui/menu/MenuList"

export default () => {
  return (
    <MenuList>
      <Item key="/">Главная</Item>
      <Item key="/ticker">Тикер</Item>
      <Item key="/settings">Настройки</Item>
    </MenuList>
  )
}
