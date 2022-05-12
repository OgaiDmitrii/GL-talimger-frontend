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
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/react';
  import { useRouter } from 'next/router'
  
  import bkim2 from "../public/bkim2.jpg"
  import logo from "./img/LogoSmall.png"
  import Image from "next/image"

  
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const grayC = useColorModeValue('white', 'gray.700');
    return (
    <ChakraProvider>
        <Box position={"absolute"} margin="30px" width="100%">
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
            </Stack>
            <Box
                rounded={'lg'}
                bg={()=>grayC}
                boxShadow={'lg'}
                p={8}>
                <Stack spacing={4}>
                <FormControl id="email" isRequired>
                    <FormLabel>Логин</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email адрес</FormLabel>
                    <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Пароль</FormLabel>
                    <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} />
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
                </FormControl>
                <Stack spacing={10} pt={2}>
                    <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={'red.400'}
                    color={'white'}
                    _hover={{
                        bg: 'red.500',
                    }}>
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