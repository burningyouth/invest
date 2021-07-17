import { MenuTrigger, ActionButton } from "@adobe/react-spectrum"
import { BasicComponentProps } from "./types"
import ShowMenu from "@spectrum-icons/workflow/ShowMenu"
import Close from "@spectrum-icons/workflow/Close"

export type MenuTriggerProps = BasicComponentProps & {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default ({ isOpen, setIsOpen, children }: MenuTriggerProps) => {
  return (
    <MenuTrigger isOpen={isOpen} onOpenChange={(isOpen) => setIsOpen(isOpen)}>
      <ActionButton>{!isOpen ? <ShowMenu /> : <Close />}</ActionButton>
      <>{children}</>
    </MenuTrigger>
  )
}
