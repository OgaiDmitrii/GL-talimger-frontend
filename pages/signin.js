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
    ChakraProvider
  } from '@chakra-ui/react';
    import { useRouter } from 'next/router'
    import Image from "next/image"
    import bkim2 from "../public/bkim2.jpg"
    import logo from "./img/LogoSmall.png"
  
  export default function Signin() {
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
        minH={'100vh'}
        align={'center'}
        justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Text fontSize={'4xl'}>Вход в систему</Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={()=>grayC}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Логин</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Пароль</FormLabel>
                <Input type="password" />
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
                  }}>
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