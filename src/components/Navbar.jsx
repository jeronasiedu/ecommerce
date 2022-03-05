import {
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
  Avatar,
  Box,
  Button,
  useMediaQuery,
  Text,
  Tooltip,
  List,
  ListItem,
  ListIcon,
  useDisclosure,
} from '@chakra-ui/react'
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  ImSearch,
  BsSave,
  BsChatLeftText,
  IoMdNotificationsOutline,
  HiOutlineViewGridAdd,
  RiShieldUserLine,
  MdAttachMoney,
  AiOutlineSetting,
  BiLogOut,
  GoHome,
  GiSellCard,
  FaRegUserCircle,
  BsBookmarkHeart,
} from 'react-icons/all'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import RegisterModal from './Modal'
const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const navigate = useNavigate()
  const [halfScrolled, setHalfScrolled] = useState(false)
  const [mobile] = useMediaQuery('(max-width: 768px)')
  const bottomNavRef = useRef('')
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY)
  const [showNav, setShowNav] = useState(false)
  const [user, setUser] = useState(true)
  const [hideInput, setHideInput] = useState(false)
  const [placeholderText, setPlaceholderText] = useState(
    'Search products, brands and categories'
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const hoverItems = [
    {
      name: 'My page',
      icon: RiShieldUserLine,
    },
    {
      name: 'My Balance',
      icon: MdAttachMoney,
    },
    {
      name: 'Settings',
      icon: AiOutlineSetting,
    },
    {
      name: 'Log out',
      icon: BiLogOut,
    },
  ]
  const navIcons = [
    {
      label: 'Saved',
      icon: <BsSave />,
    },
    {
      label: 'Messages',
      icon: <BsChatLeftText />,
    },
    {
      label: 'Notifications',
      icon: <IoMdNotificationsOutline />,
    },
  ]
  const mobileNavIcons = [
    { name: 'Home', icon: <GoHome size={20} /> },
    { name: 'Saved', icon: <BsBookmarkHeart size={20} /> },
    { name: 'Sell', icon: <GiSellCard size={20} /> },
    { name: 'Messages', icon: <BsChatLeftText size={20} /> },
    { name: 'Profile', icon: <FaRegUserCircle size={20} /> },
  ]
  const hideBottomNav = () => {
    let currentScrollPos = window.scrollY
    if (prevScrollPos > currentScrollPos) {
      setShowNav(true)
    } else {
      setShowNav(false)
    }
    setPrevScrollPos(currentScrollPos)
    if (scrollY > 35) {
      setHalfScrolled(true)
    } else {
      setHalfScrolled(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', hideBottomNav)
    return () => {
      window.removeEventListener('scroll', hideBottomNav)
    }
  }, [window.scrollY])
  // NAVIGATING USER IF LOGIN
  const navigateToProfile = () => {
    if (!user) {
      onOpen()
      return
    }
    navigate('/profile')
  }
  // CHECK LOCATION TO REMOVE SEARCH BAR
  const { pathname } = useLocation()

  const generatePlaceholder = () => {
    const availableCategories = [
      'electronics',
      'mobile',
      'smart-phones',
      'apparel',
      'services',
    ]
    if (
      pathname !== '/' &&
      availableCategories.includes(pathname.split('/')[2])
    ) {
      const category = pathname.split('/')[2].replace(/-/g, ' ')
      setPlaceholderText(`Search in ${category}`)
    } else {
      setPlaceholderText(`Search products, brands and categories`)
    }
  }
  const hideInputField = () => {
    if (pathname.includes('profile') || pathname.includes('sell')) {
      setHideInput(true)
    } else {
      setHideInput(false)
    }
  }
  useEffect(() => {
    generatePlaceholder()
    hideInputField()
  }, [pathname])

  return (
    <>
      <VStack
        pos="sticky"
        top="0"
        left="0"
        zIndex="1000"
        bg="white"
        pb={['2', '0']}
        backdropFilter="blur(0.4rem)"
        transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
        mb="2"
        shadow={halfScrolled ? 'md' : 'sm'}
      >
        <RegisterModal isOpen={isOpen} onClose={onClose} mobile={mobile} />
        <HStack p="2" w="100%">
          <Box minW="5.2rem" w="5.2rem" as={Link} to="/">
            <Image
              src="images/logo1.png"
              alt="My logo"
              objectFit={'cover'}
              boxSize="100%"
            />
          </Box>
          <Spacer />
          {/* INPUT FIELD */}
          {!hideInput && (
            <InputGroup
              maxW={['17rem', '75%', '30rem']}
              d={['none', 'none', 'inline-flex']}
            >
              <InputLeftElement
                pointerEvents="none"
                children={<ImSearch color="gray.300" />}
              />
              <Input
                type="search"
                placeholder={placeholderText}
                _placeholder={{
                  fontSize: 'sm',
                  color: 'blackAlpha.900',
                }}
              />
            </InputGroup>
          )}

          <Spacer />

          {user ? (
            <HStack>
              {!mobile &&
                navIcons.map((item, idx) => (
                  <Tooltip label={item.label} key={idx}>
                    <IconButton icon={item.icon} size="sm" />
                  </Tooltip>
                ))}
              <Tooltip label="Adverts">
                <IconButton icon={<HiOutlineViewGridAdd />} size="sm" />
              </Tooltip>
              <Spacer />
              {mobile ? (
                <Avatar
                  size="sm"
                  src="/images/user.jpg"
                  onClick={navigateToProfile}
                />
              ) : (
                <Box pos="relative" cursor="pointer" className="user-profile">
                  <Avatar size="sm" src="/images/user.jpg" />
                  <Box
                    shadow="lg"
                    w="9rem"
                    pos="absolute"
                    top="9"
                    rounded={'md'}
                    overflow="hidden"
                    left={['-7rem', '-6rem']}
                    className="user-profile-box"
                    bg="white"
                  >
                    <List w="100%" spacing="2">
                      {hoverItems.map((item, i) => (
                        <ListItem
                          key={i}
                          fontSize="sm"
                          color="gray.500"
                          p="2"
                          _hover={{
                            bg: 'gray.300',
                            color: 'black',
                          }}
                        >
                          <ListIcon as={item.icon} color="blue.500" />
                          {item.name}
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Box>
              )}
              {!mobile && (
                <Button
                  size="sm"
                  px="5"
                  rounded="sm"
                  onClick={() => navigate('/sell')}
                >
                  SELL
                </Button>
              )}
            </HStack>
          ) : (
            <HStack>
              {mobile ? (
                <Avatar size="sm" onClick={navigateToProfile} />
              ) : (
                <HStack>
                  <Button
                    size="sm"
                    variant="ghost"
                    colorScheme="facebook"
                    textTransform="uppercase"
                    rounded="sm"
                    onClick={onOpen}
                  >
                    Sign In
                  </Button>
                  <Button
                    size="sm"
                    px="2rem"
                    textTransform="uppercase"
                    rounded="sm"
                    onClick={onOpen}
                  >
                    Sell
                  </Button>
                </HStack>
              )}
            </HStack>
          )}
        </HStack>
        {!hideInput && (
          <InputGroup display={['block', 'block', 'none']} maxW="95%">
            <InputLeftElement
              pointerEvents="none"
              children={<ImSearch color="gray.300" />}
            />
            <Input type="search" placeholder={placeholderText} />
          </InputGroup>
        )}
      </VStack>
      {/* BOTTOM NAVIGATION */}
      {mobile && (
        <Flex
          pos="fixed"
          bottom={showNav ? '0' : '-4rem'}
          left="0"
          width="100%"
          boxShadow="0 -3px 2px rgba(0, 0, 0, 0.15)"
          bg="white"
          zIndex={1000}
          px="3"
          py="1"
          align="center"
          justify="space-around"
          ref={bottomNavRef}
          transition="0.5s  cubic-bezier(0.165, 0.840, 0.440, 1.000)"
        >
          {mobileNavIcons.map((item, idx) => (
            <VStack spacing="0" key={idx}>
              <IconButton icon={item.icon} size="sm" variant="ghost" />
              <Text fontSize="xs">{item.name}</Text>
            </VStack>
          ))}
        </Flex>
      )}
    </>
  )
}

export default Navbar
