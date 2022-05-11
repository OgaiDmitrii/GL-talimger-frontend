import Main from '../templates/main'
import { Box,Flex, Text, List, ListItem } from '@chakra-ui/react'
import Image from 'next/image'

import QR from "./img/QR.png"
import busi from "./img/busi.jpg"
export default function Index() {
  return (
    <Main>
        <Flex  backgroundColor="rgba(255,255,255,0.8)" padding={5} direction="column">
          <Box width="100%" textAlign="center" mb="1%">
            <Text fontSize={20}>ОБРАЗОВАТЕЛЬНЫЙ КОНСАЛТИНГ</Text>
          </Box>
          <Flex>
            <Box width="50%">
              <Flex flexDirection="column"
                    justifyContent="center"
                    alignItems="center">
                <Flex alignItems="center" justifyContent="center" width="100%">
                  <Image
                    max-width="50%"
                    src={QR}
                  />
                  <Flex width="50%"
                    flexDirection="column"
                    justifyContent="space-between"
                    alignItems="center">
                    <Text fontSize={20}>АНАЛИТИКА</Text>
                    <Text fontSize={20}>ИССЛЕДОВАНИЯ</Text>
                    <Text fontSize={20}>ЭКСПЕРТИЗА</Text>
                    <Text fontSize={20}>ТРЕНИНГ</Text>
                    </Flex>
                </Flex>
              </Flex>
            </Box>
            <Box maxW="50%">
              <Image max-width="100%" src={busi}/>
            </Box>
          </Flex>
        </Flex>
    </Main>
  )
}
