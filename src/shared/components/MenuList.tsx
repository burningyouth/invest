import { Menu } from "@adobe/react-spectrum"
import { useHistory } from "react-router-dom"
import { MenuProps } from "@react-types/menu"

export type MenuListProps = Omit<MenuProps<any>, "onAction">

export default ({ children }: MenuListProps) => {
  const history = useHistory()
  return <Menu onAction={(key) => history.push(String(key))}>{children}</Menu>
}
