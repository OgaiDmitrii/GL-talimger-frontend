import Main from '../templates/main'
import { Box,Flex, Text, List, ListItem,Button } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import QR from "./img/QR.png"
import busi from "./img/busi.jpg"
import nookies from "nookies"
import axios from 'axios'


export default function Index(props) {
  const router = useRouter();

  const loginout = async () => {
    const {data} = await axios.post("/api/loginout");
    router.replace("/");
  }
  var SignIn = () => {
    console.log(props.username);
    if(!props.username)
      return (
        <Flex direction="row" justifyContent="space-between">
            <Button backgroundColor="blue.300" mr="20px" onClick={()=>router.replace("/signin")}>Вход</Button>
            <Button backgroundColor="red.300" onClick={()=>router.replace("/signup")}>Регистрация</Button>
        </Flex>
      );
    else 
      return (
        <Flex direction="row" justifyContent="space-between">
            <Button backgroundColor="blue.300" mr="20px" onClick={()=>router.replace("/userMainPanel")}>Войти в систему</Button>
            <Button backgroundColor="red.300" onClick={loginout}>Выход</Button>
        </Flex>
      );
    }
  return (
    <Main>
        <Flex  backgroundColor="rgba(255,255,255,0.8)" padding={5} direction="column">
          <Flex width="100%" textAlign="center" mb="1%" justifyContent="center">
            <Text fontSize={20} width="80%">ОБРАЗОВАТЕЛЬНЫЙ КОНСАЛТИНГ</Text>
            <SignIn/>
          </Flex>
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
      console.log(e);
    }
  }
  if (user)
    user = user.username;
  else
    user = "";
console.log(user);
      return(
          {
              props:{username: user}
          }
      );
}
