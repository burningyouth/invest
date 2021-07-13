import {
  IllustratedMessage,
  Heading,
  Content,
  Flex,
  Button,
} from "@adobe/react-spectrum"
import Alert from "@spectrum-icons/workflow/Alert"
import { History } from "history"
import { useMemo } from "react"
import { useHistory } from "react-router-dom"

export type ErrorButtonTypes = "goBack" | "refresh" | "toSettings"

export type ErrorProps = {
  heading?: React.ReactNode
  content?: React.ReactNode
  children?: React.ReactNode
  showError?: boolean
  buttons?: ErrorButtonTypes[]
}

const buttonComponents = (buttons: ErrorButtonTypes[], history: History) =>
  buttons.map((button) => {
    switch (button) {
      case "goBack":
        return (
          <Button
            variant="secondary"
            onPress={() => {
              history.goBack()
            }}
          >
            Вернуться назад
          </Button>
        )
      case "refresh":
        return (
          <Button
            variant="secondary"
            onPress={() => {
              window.location.reload()
            }}
          >
            Обновить страницу
          </Button>
        )
      case "toSettings":
        return (
          <Button
            variant="secondary"
            onPress={() => {
              history.push("/settings")
            }}
          >
            Настройки
          </Button>
        )
    }
  })

export default ({
  heading,
  content,
  showError = true,
  children,
  buttons = [],
}: ErrorProps) => {
  const history = useHistory()
  const components = useMemo(
    () => buttonComponents(buttons, history),
    [buttons, history]
  )
  return showError ? (
    <Flex justifyContent="center" alignItems="center" width="100%" height="80%">
      <IllustratedMessage>
        <Alert size="XXL" aria-label="alert icon" />
        <Heading>{heading}</Heading>
        <Content>
          {content}
          <br />
          <br />
          {components}
        </Content>
      </IllustratedMessage>
    </Flex>
  ) : (
    <>{children}</>
  )
}
