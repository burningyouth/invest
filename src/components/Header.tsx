import { View, Flex, Heading } from "@adobe/react-spectrum"
import GraphDonut from "@spectrum-icons/workflow/GraphDonut"

export default () => {
  return (
    <View borderBottomWidth="thin" borderColor="gray-200">
      <Flex
        gap="size-50"
        marginStart="size-100"
        alignItems="center"
        height="100%"
      >
        <GraphDonut aria-label="Logo" size="L" />
        <Heading level={2} marginStart="size-100">
          Мои инвестиции
        </Heading>
      </Flex>
    </View>
  )
}
