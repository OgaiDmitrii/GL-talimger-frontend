import { Flex, Text } from '@chakra-ui/react'
import Main from '../templates/main'

export default function Target() {
  return (
    <Main>
      <Flex direction="column">
        <Flex direction="column" mb="30px" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
          <Text fontSize={28} pb="10px">Миссия</Text>
          <Text fontSize={20}>Повышение лидерского, профессионального и личностного потенциала всех участников образовательного процесса</Text>
        </Flex>
        <Flex direction="column" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
          <Text fontSize={28} pb="10px">Мы ценим</Text>
          <Text fontSize={20}>Добропорядочность</Text>
          <Text fontSize={20}>Взаимное сотрудничество</Text>
          <Text fontSize={20}>Профессионализм</Text>
          <Text fontSize={20}>Искренность</Text>
          <Text fontSize={20}>Открытость</Text>
          <Text fontSize={20}>Социальная ответственность</Text>
        </Flex>
      </Flex>
    </Main>
  )
}
