import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    ChakraProvider,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react';
  import { useState ,useContext} from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/react';
  import { useRouter } from 'next/router'
  import axios from "axios"
  
  import bkim2 from "../public/bkim2.jpg"
  import logo from "./img/LogoSmall.png"
  import Image from "next/image"

  var loginVal = "";
  var emailVal = "";
  var passwordVal = "";
  


  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [alert, setAlert] = useState(false);
    const [alertDescription, setAlertDescription] = useState("Ошибка");
    const router = useRouter();
    const grayC = useColorModeValue('white', 'gray.700');
    const setData = (e,type) =>{
        if (type == "login")
          loginVal = e.target.value;
        if (type == "email")
          emailVal = e.target.value;
        if (type == "password")
          passwordVal = e.target.value;  
    };
  
    const initAuth = async () => {
        setAlert(false);
        var data;
        if (passwordVal.length >= 6)
        {
            data = await axios.post("/api/register",{
                "username": loginVal,
                "email": emailVal,
                "password": passwordVal
            });

        }
        else 
            {setAlertDescription("Пароль должен состоять более чем из 6 символов");setAlert(true);return;}
        if (!data)
            {
                return;
            }
        switch (data){
            case "NoValidEmail":{setAlertDescription("Не верный email");setAlert(true); break;}
            case "EmailExist":{setAlertDescription("Email уже привязан");setAlert(true); break;}
            case "LoginExist":{setAlertDescription("Логин уже создан");setAlert(true); break;}
        }
        router.push("/");
        
    };

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
            align={'center'}
            justify={'center'}
            minH="100vh"
            >
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
                <Heading fontSize={'4xl'} textAlign={'center'}>
                Регистрация в системе
                </Heading>
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
                <FormControl id="login" isRequired>
                    <FormLabel>Логин</FormLabel>
                    <Input type="login"  onChange={(e)=> setData(e,"login")}/>
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email адрес</FormLabel>
                    <Input type="email" onChange={(e)=> setData(e,"email")} />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Пароль</FormLabel>
                    <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} onChange={(e)=> setData(e,"password")} />
                    <InputRightElement h={'full'}>
                        <Button
                        variant={'ghost'}
                        onClick={() =>
                            setShowPassword((showPassword) => !showPassword)
                        }>
                        {()=>showPassword ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                    </InputGroup>
                    <Text>(длина пароля должна быть не меньше 6 символов)</Text>
                </FormControl>
                <Stack spacing={10} pt={2}>
                    <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'red.400'}
                    color={'white'}
                    _hover={{
                        bg: 'red.500',
                    }}
                    onClick={()=>initAuth()}
                    >
                    Регистрация
                    </Button>
                </Stack>
                <Stack pt={6}>
                    <Text align={'center'}>
                    Уже зарегистрированы? <Link color={'blue.400'} onClick={()=>router.replace("/signin")}>Войти</Link>
                    </Text>
                </Stack>
                </Stack>
            </Box>
            </Stack>
        </Flex>
    </ChakraProvider>
    
    );
  }