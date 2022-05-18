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
    import axios from 'axios';
    var loginVal = "";
    var passwordVal = "";
  export default function Signin() {
    const [alert, setAlert] = useState(false);
    const [alertDescription, setAlertDescription] = useState("Ошибка");
    
    const setData = (e,type) =>{
        if (type == "login")
          loginVal = e.target.value;
        if (type == "password")
          passwordVal = e.target.value; 
        return true;
    };
  
    const initAuth = async () => { 
      console.log("process.env.NEXT_PUBLIC_STRAPI_API_URL");
        console.log(process.env.NEXT_PUBLIC_STRAPI_API_URL);
        setAlert(false);
        const {data} = await axios.post("/api/login",{
                "identifier": loginVal,
                "password": passwordVal
            });
        if (!data)
            {
                return true;
            }
        switch (data){
            case "InvalidAuth":{setAlertDescription("Неверный логин или пароль");setAlert(true); return true;}
            case "EmLogin":{setAlertDescription("Введите логин");setAlert(true); return true;}
            case "EmPass":{setAlertDescription("Введите пароль");setAlert(true); return true;}
        }
        router.push("/userMainPanel");
        
    };
    const router = useRouter();    
    const grayC = useColorModeValue('white', 'gray.700');
    return (
    <ChakraProvider>
        <Box position={"absolute"} margin="1%" width="99%">
          <Image src={logo} onClick={()=>router.replace("/")}/>
          <Text fontSize={20} mt="1%">САМООЦЕНКА <br/>ОБРАЗОВАТЕЛЬНОЙ <br/>ДЕЯТЕЛЬНОСТИ</Text>
        </Box>
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
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Text fontSize={'4xl'}>Вход в систему</Text>
              <Alert status='error' hidden={!alert}>
                  <AlertIcon />
                  <Box>
                      <AlertTitle>{alertDescription}</AlertTitle>
                  </Box>
              </Alert>
          </Stack>
          <Box
            rounded={'lg'}
            bg={()=>grayC}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="login">
                <FormLabel>Логин</FormLabel>
                <Input type="text" name="login" onChange={(e)=> {setData(e,"login")}}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Пароль</FormLabel>
                <Input type="password"  name="password" onChange={(e)=> setData(e,"password")}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Link color={'red.400'} onClick={()=>router.replace("/signup")}>Регистрация</Link>
                  <Link color={'blue.400'}>Забыли пароль?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  onClick={()=>initAuth()}>
                  Вход
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </ChakraProvider>
    );
  }