import { View, Flex, Heading } from "@adobe/react-spectrum"
import { useState } from "react"
import { useMediaQuery } from "../../shared/hooks/useMediaQuery"
import { ThemeButton } from "../../features/theme"
import { BasicComponentProps, Logo, MenuTrigger } from "../../shared/components"
import { Link } from "react-router-dom"
import styles from "./header.module.css"

export type HeaderProps = BasicComponentProps & {
  onMenuItemPress?: (key: React.Key) => void
}

export default ({ children }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMediaQuery(`(max-width:640px)`)

  return (
    <View borderBottomWidth="thin" borderColor="gray-300" padding="size-150">
      <Flex
        gap="size-50"
        alignItems="center"
        height="100%"
        justifyContent="space-between"
      >
        <Flex gap="size-150" alignItems="center">
          <Link to="/" className={styles.headerTitle}>
            <Logo size="M" />

            <Heading
              level={isMobile ? 3 : 2}
              marginTop="0"
              marginBottom="0"
              marginStart="size-100"
            >
              Мои инвестиции
            </Heading>
          </Link>
        </Flex>
        <Flex gap="size-150" alignItems="center">
          <ThemeButton />
          <MenuTrigger isOpen={isOpen} setIsOpen={setIsOpen}>
            {children}
          </MenuTrigger>
        </Flex>
      </Flex>
    </View>
  )
}
