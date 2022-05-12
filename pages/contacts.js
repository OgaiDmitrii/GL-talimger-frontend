import { Flex, Text, Divider, Link } from '@chakra-ui/react'
import Main from '../templates/main'
import Image from "next/image"
import contacts1 from "./img/Contacts1.png"
import contacts2 from "./img/Contacts2.png"
import contacts3 from "./img/Contacts3.png"
import contacts4 from "./img/Contacts4.png"

export default function Target() {
  return (
    <Main>
      <Flex direction="column">
        <Flex direction="column" mb="30px" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
          <Text fontSize={20} pb="10px">Контакты</Text>
          <Text>По вопросам сотрудничества обращайтесь по <br/>контактным данным, указанным ниже</Text>      
        </Flex>
        <Flex direction={"row"} justifyContent="space-between">
          <Flex direction={"column"} width="45%" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
            <Text><b>Email и телефон</b></Text>
            <Flex direction={"row"} alignItems="center" p="5px">
              <Image src={contacts1} height="62px" width="62px"/>
              <Text pl={10} fontSize="17px">gltalimger2021@gmail.com</Text>
            </Flex>
            <Flex direction={"row"} alignItems="center" p="5px">
              <Image src={contacts2} height="62px" width="62px"/>
              <Text pl={10} fontSize="17px">
                +7 705 311 0846<br/>
                +7 701 655 5100
              </Text>
            </Flex>
          </Flex>
          <Divider orientation='vertical' height="100%" size="2px" color={"red"}/>
          <Flex direction={"column"} width="45%" backgroundColor="rgba(255,255,255,0.8)" padding={5}>
            <Text><b>Социальные сети</b></Text>
            <Flex direction={"row"} alignItems="center" p="5px">
              <Image src={contacts3} height="62px" width="62px"/>
              <Link pl={10} fontSize="17px" color={"blue.500"} href="https://wa.me/+77713611733" target={"_blank"}>+7 771 361 1733</Link>
            </Flex>
            <Flex direction={"row"} alignItems="center" p="5px">
              <Image src={contacts4} height="62px" width="62px"/>
              <Link pl={10} fontSize="17px" color={"blue.500"} href="https://telegram.me/+77053110846" target={"_blank"}>+7 705 311 0846</Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Main>
  )
}
