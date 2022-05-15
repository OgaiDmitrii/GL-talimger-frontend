import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    ChakraProvider,
    Alert,
    AlertIcon,
    AlertTitle,
  } from '@chakra-ui/react';
    import { useRouter } from 'next/router'
    import Image from "next/image"
    import bkim2 from "../public/bkim2.jpg"
    import logo from "./img/LogoSmall.png"
    import { useState } from 'react';
    import nookies from "nookies"
    import axios from 'axios';

 

  export default function UserManualPanel(props) {
    
    const router = useRouter();
    return (
    <ChakraProvider>
        <Flex position={"absolute"} margin="1%" width="99%" direction="row">
          <Image src={logo} onClick={()=>router.replace("/")}/>
        </Flex>
        <Flex position = "absolute" justifyContent={"center"} width="100%" mt="3%" direction={"row"}>
          <Text fontSize={20}>САМООЦЕНКА ОБРАЗОВАТЕЛЬНОЙ ДЕЯТЕЛЬНОСТИ</Text>
        </Flex>
        <div id="bgWrap">
        <Image
            alt="travel"
            src={bkim2}
            layout="fill"
            objectFit="cover"
            quality={100}
        />
      </div>
      <style jsx>
        {`
          #bgWrap {
            position: fixed;
            height: 100%;
            width: 100%;
            overflow: hidden;
            z-index: -1;
            top:0;
          }
        `}
      </style>
      <Flex direction="column" width="100vw" height="100vh" pt="10%">
          <Flex direction="row" height="43%" margin="1%">
            <Box h="98%" w="31.3%" backgroundColor={"red.400"} margin="1%">
                1
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"orange.400"} margin="1%">
                2
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"yellow.400"} margin="1%">
                3
            </Box>
          </Flex>
          <Flex direction="row" height="43%"  margin="1%">
          <Box height="98%" width="31.3%" backgroundColor={"green.400"} margin="1%">
                1
            </Box>
            <Box height="98%" width="31.3%" backgroundColor={"cyan.400"} margin="1%">
                2
            </Box>
            <Box height="98%" width="31.3%" backgroundColor={"blue.400"} margin="1%">
                3
            </Box>
          </Flex>
      </Flex>
    </ChakraProvider>
    );
  }

  export async function getServerSideProps (ctx){
    // Get user id   // return props
    const cookies = nookies.get(ctx)
    let user = null;
    if (cookies?.jwt) {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/users/me`, {
          headers: {
            Authorization:
              `Bearer ${cookies.jwt}`,
            },
        });
        user = data;
      } catch (e) {
        console.log(e.response);
      }
    }
    if (!user)
        return {
            redirect: {
                permanent: false,
                destination: '//'
            }
        }
    else
        return(
            {
                props:{username: user.username}
            }
        );
  }