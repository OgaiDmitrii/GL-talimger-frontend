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
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const grayC = useColorModeValue('white', 'gray.700');
    return (
    <ChakraProvider>
        <Button  position="absolute" ml={20} mt={10} justifyContent="center" fontSize={18} _hover={{color: "blue.400"}} onClick={()=>router.replace("/")}><b>{"На главную"}</b></Button>
        <Flex  bg={useColorModeValue('gray.50', 'gray.800')}
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