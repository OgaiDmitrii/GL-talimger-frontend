import React from 'react'
import {
  ChakraProvider,
  Box,
  Flex,
  Text
} from '@chakra-ui/react'
import Image from "next/image"
import logo from "../pages/img/Logo.png"
import { useRouter } from 'next/router'

export default function Footer(){
    const router = useRouter();
 return (
  <ChakraProvider>
    <Box mt={10} mb={20}>
      <Flex justifyContent="center"  backgroundColor="rgba(255,255,255,0.8)" pt="30px" pb="30px">
        <Text>© {(new Date()).getFullYear().toString()} - GL talimger</Text>
      </Flex>
    </Box>
  </ChakraProvider>
)

 }