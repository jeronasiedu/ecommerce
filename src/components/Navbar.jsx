import {
  Box,
  Flex,
  HStack,
  IconButton,
  Spacer,
  useColorMode,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
  Image,
} from '@chakra-ui/react'
import {
  BiUser,
  GiShoppingCart,
  MdOutlineDarkMode,
  MdOutlineLightMode,
  ImSearch,
  BiMenu,
} from 'react-icons/all'
import { useState, useEffect } from 'react'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [halfScrolled, setHalfScrolled] = useState(false)
  const addClass = () => {
    if (scrollY > 30) {
      setHalfScrolled(true)
    } else {
      setHalfScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', addClass)
    return () => {
      window.removeEventListener('scroll', addClass)
    }
  }, [])

  return (
    <VStack
      pos="sticky"
      top="0"
      left="0"
      zIndex="1000"
      bg="whiteAlpha.300"
      pb={['2', '0']}
      backdropFilter="blur(0.4rem)"
      shadow={halfScrolled ? 'md' : 'sm'}
      transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
    >
      <HStack p="2" w="100%">
        <Flex w="100%" align="center">
          <IconButton
            icon={<BiMenu />}
            size="sm"
            mr="2"
            variant="outline"
            colorScheme="blue"
          />
          <Image src="/images/logo.png" w="1.9rem" alt="logo" />
          <Spacer />
          <InputGroup
            maxW={['17rem', '55%', '30rem']}
            display={['none', 'inline-flex']}
          >
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input
              type="search"
              placeholder="Search for products, brands and categories"
            />
          </InputGroup>
          <Spacer />
          <HStack>
            <IconButton
              icon={<GiShoppingCart />}
              size="sm"
              colorScheme="blue"
              variant="outline"
            />
            <IconButton
              icon={<BiUser />}
              size="sm"
              colorScheme="blue"
              variant="outline"
            />

            <IconButton
              variant="outline"
              colorScheme="blue"
              icon={
                colorMode === 'light' ? (
                  <MdOutlineDarkMode />
                ) : (
                  <MdOutlineLightMode />
                )
              }
              onClick={toggleColorMode}
              size="sm"
            />
          </HStack>
        </Flex>
      </HStack>
      <InputGroup display={['block', 'none']} maxW="95%">
        <InputLeftElement
          pointerEvents="none"
          children={<ImSearch color="gray.300" />}
        />
        <Input
          type="search"
          placeholder="Search for products, brands and categories"
        />
      </InputGroup>
    </VStack>
  )
}

export default Navbar
