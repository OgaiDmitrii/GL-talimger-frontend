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
    import pict1 from "./img/MainMenu1.svg"
    import pict2 from "./img/MainMenu2.png"
    import pict3 from "./img/MainMenu3.png"
    import pict4 from "./img/MainMenu4.png"
    import pict5 from "./img/MainMenu5.png"
    import pict6 from "./img/MainMenu6.png"
 

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
            <Box h="98%" w="31.3%" backgroundColor={"#c3adb3"} margin="1%" _hover={{ bg: '#c3add6'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>1. BIO ОРГАНИЗАЦИИ ОБРАЗОВАНИЯ</Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict1} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>краткая информация об организации образования</Text>
                </Box>
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"#d09786"} margin="1%"  _hover={{ bg: '#d097a6'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>2. СОДЕРЖАНИЕ ОБРАЗОВАНИЯ С ОРИЕНТИРОМ  НА РЕЗУЛЬТАТ</Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict2} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>ГОСО, учебный план, учебная программа</Text>
                </Box>
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"#b38f6a"} margin="1%"  _hover={{ bg: '#b38f8a'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>3. МАКСИМАЛЬНЫЙ ОБЪЕМ УЧЕБНОЙ НАГРУЗКИ ОБУЧАЮЩИХСЯ И ВОСПИТАННИКОВ </Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict3} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>ОУД, дисциплины, часы</Text>
                </Box>
            </Box>
          </Flex>
          <Flex direction="row" height="43%"  margin="1%">
            <Box h="98%" w="31.3%" backgroundColor={"#B5C170"} margin="1%"  _hover={{ bg: '#B5C190'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>4. УРОВЕНЬ ПОДГОТОВКИ ВОСПИТАННИКОВ И ОБУЧАЮЩИХСЯ</Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict4} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>Диагностика/СОР/СОЧ/тестирование/анкетирование</Text>
                </Box>
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"#5fbeb8"} margin="1%"  _hover={{ bg: '#5fbed8'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>5. СРОКИ ОБУЧЕНИЯ</Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict5} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>требования к продолжительности учебного года, к срокам освоения программы</Text>
                </Box>
            </Box>
            <Box h="98%" w="31.3%" backgroundColor={"#86a1a9"} margin="1%"  _hover={{ bg: '#86a1c9'}}>
                <Box h="33%">
                  <Text fontSize={18} color="white" padding={5}>6. ОТЧЕТ ПО САМООЦЕНКЕ </Text>
                </Box>
                <Flex justifyContent={"center"} h={"136px"}>
                  <Image src={pict6} quality={100}  width={"136px"} />
                </Flex>
                <Box h="33%" textAlign={"center"}>
                  <Text fontSize={16} color="white" padding={5}>заключение, протокол педсовета, приложения</Text>
                </Box>
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
                destination: '/'
            }
        }
    else
        return(
            {
                props:{username: user.username}
            }
        );
  }