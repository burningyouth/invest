import {
  ActionButton,
  Flex,
  Form,
  Grid,
  TextField,
} from "@adobe/react-spectrum"
import { Toolbar } from "../shared/components"

export default () => {
  return (
    <>
      <Flex
        gap="size-100"
        direction="column"
        marginStart="size-400"
        marginEnd="size-400"
      >
        <Form width="100%">
          <Grid
            columns={{ S: "100%", M: "50% 50%" }}
            gap="size-100"
            marginTop="0"
          >
            <TextField label="Токен" isRequired width="100%" />
            <TextField label="Токен Tinkoff" width="100%" />
          </Grid>
        </Form>
      </Flex>
      <Toolbar>
        <ActionButton>Сохранить</ActionButton>
      </Toolbar>
    </>
  )
}
