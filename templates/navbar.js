import React from 'react'
import {
  ChakraProvider,
  Box,
  Flex,
  Divider,
  Stack,
  Link
} from '@chakra-ui/react'
import Image from "next/image"
import logo from "../pages/img/Logo.png"
import { useRouter } from 'next/router'

export default function NavBar(){
    const router = useRouter();
 return (
  <ChakraProvider>
    <Box mt={10} mb={10}>
      <Flex justifyContent="space-between"  backgroundColor="rgba(255,255,255,0.8)" pr={10}>
        <Flex>
          <Image height="136px" width="255px" src={logo} alt="Logo" quality={100} onClick={()=>router.push("/")}/>
        </Flex>
        <Stack
          spacing={9}
          isInline
          justifyContent="center"
          alignItems="center"
          fontSize="20px"
          textAlign="center"
        >
          <Box>
            <Link 
                onClick={()=>router.push("/")}
                _hover={{
                    color:"grey"
                }}
            >Главная страница</Link>
          </Box>
          <Box>
            <Link 
                onClick={()=>router.push("/about")}
                _hover={{
                    color:"grey"
                }}
            >О нас</Link>
          </Box>
          <Box>
            <Link 
                onClick={()=>router.push("/target")}
                _hover={{
                    color:"grey"
                }}
            >Миссия и ценности</Link>
          </Box>
          <Box>
            <Link 
                onClick={()=>router.push("/trainings")}
                _hover={{
                    color:"grey"
                }}
            >Тренинг</Link>
          </Box>
          <Box>
            <Link 
                onClick={()=>router.push("/contacts")}
                _hover={{
                    color:"grey"
                }}
            >Контакты</Link>
          </Box>
        </Stack>
      </Flex>
    </Box>
  </ChakraProvider>
)

 }