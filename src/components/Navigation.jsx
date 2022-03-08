import {
  HStack,
  Image,
  Spacer,
  useMediaQuery,
  InputGroup,
  InputLeftElement,
  Input,
  Tooltip,
  IconButton,
  Avatar,
  Button,
  VStack,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  Text,
  MenuDivider,
} from '@chakra-ui/react'
import {
  ImSearch,
  HiOutlineViewGridAdd,
  GiSellCard,
  CgMenu,
  BsBookmarkHeart,
} from 'react-icons/all'
import logo from '../logo.png'
import useStore from '../utils/store'
import Modal from '../components/Modal'
import { useNavigate, useParams } from 'react-router-dom'
const Navigation = ({ type }) => {
  const [mobile] = useMediaQuery('(max-width: 768px)')
  const user = useStore((state) => state.user)
  const { isOpen, onOpen, onClose } = useStore((state) => ({
    isOpen: state.isOpen,
    onOpen: state.onOpen,
    onClose: state.onClose,
  }))

  return mobile ? (
    <MobileNavigation
      user={user}
      onOpen={onOpen}
      mobile={mobile}
      onClose={onClose}
      isOpen={isOpen}
      type={type}
    />
  ) : (
    <DesktopNavigation
      isOpen={isOpen}
      user={user}
      onOpen={onOpen}
      mobile={mobile}
      onClose={onClose}
      type={type}
    />
  )
}
const DesktopNavigation = ({ user, onOpen, mobile, isOpen, onClose, type }) => {
  const desktopIcons = [
    {
      label: 'Saved',
      icon: <BsBookmarkHeart />,
      to: '/saved',
    },
    {
      label: 'Adverts',
      icon: <HiOutlineViewGridAdd />,
      to: '/adverts',
    },
    {
      label: 'Sell',
      icon: <GiSellCard />,
      to: '/sell',
    },
  ]
  const { name } = useParams()
  const navigate = useNavigate()
  return (
    <HStack
      p={2.5}
      shadow="sm"
      pos="sticky"
      top="0"
      left="0"
      zIndex={999}
      w="full"
      bg="white"
      transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
      backdropFilter="blur(0.4rem)"
      mb={2}
    >
      <Modal isOpen={isOpen} onClose={onClose} mobile={mobile} />
      <Image
        src={logo}
        alt="logo"
        minW="5.2rem"
        w="5.2rem"
        cursor="pointer"
        onClick={() => navigate('/')}
      />
      <Spacer />
      <InputGroup maxW="30rem" variant="outline">
        <InputLeftElement
          pointerEvents="none"
          children={<ImSearch />}
          color="gray.600"
        />
        <Input
          type="search"
          placeholder={
            name && type === 'category'
              ? `Start Searching in ${name}`
              : 'Start Searching'
          }
        />
      </InputGroup>
      <Spacer />
      {user ? (
        <HStack>
          {desktopIcons.map((item, key) => (
            <Tooltip label={item.label} key={key}>
              <IconButton
                icon={item.icon}
                size="sm"
                onClick={() => navigate(item.to)}
              />
            </Tooltip>
          ))}

          <Avatar
            size="sm"
            src="/images/user.jpg"
            alt="user avatar"
            cursor="pointer"
            onClick={() => navigate('/profile')}
          />
        </HStack>
      ) : (
        <HStack textTransform="uppercase">
          <Button textTransform="uppercase" onClick={onOpen}>
            Sell
          </Button>
          <Button
            textTransform="uppercase"
            colorScheme="linkedin"
            onClick={onOpen}
          >
            Sign In
          </Button>
        </HStack>
      )}
    </HStack>
  )
}
const MobileNavigation = ({ user, onOpen, mobile, isOpen, onClose, type }) => {
  const { name } = useParams()
  const navigate = useNavigate()

  return (
    <VStack
      p={2.5}
      shadow="sm"
      pos="sticky"
      top="0"
      left="0"
      zIndex={999}
      w="full"
      bg="white"
      transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
      backdropFilter="blur(0.4rem)"
      mb={2}
    >
      <Modal isOpen={isOpen} onClose={onClose} mobile={mobile} />

      <HStack alignSelf="flex-start" w="full">
        <Image
          src={logo}
          alt="logo"
          minW="5.2rem"
          w="5.2rem"
          cursor="pointer"
          onClick={() => navigate('/')}
        />
        <Spacer />
        {user ? (
          <SideMenu navigate={navigate} />
        ) : (
          <Avatar size="sm" onClick={onOpen} />
        )}
      </HStack>
      <InputGroup variant="outline">
        <InputLeftElement
          pointerEvents="none"
          children={<ImSearch />}
          color="gray.600"
        />
        <Input
          type="search"
          placeholder={
            name && type === 'category'
              ? `Start Searching in ${name}`
              : 'Start Searching'
          }
        />
      </InputGroup>
    </VStack>
  )
}
export default Navigation

export function SideMenu() {
  const navigate = useNavigate()
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<CgMenu />}
        variant="outline"
      ></MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate('/profile')}>
          <Avatar src="/images/user.jpg" alt="user" size="sm" />
          <Text ml={3}>Profile</Text>
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<GiSellCard size={22} />}
          onClick={() => navigate('/sell')}
        >
          Sell
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<HiOutlineViewGridAdd size={22} />}
          onClick={() => navigate('/adverts')}
        >
          Adverts
        </MenuItem>
        <MenuDivider />
        <MenuItem
          icon={<BsBookmarkHeart size={22} />}
          onClick={() => navigate('/saved')}
        >
          Saved
        </MenuItem>
        <MenuDivider />
      </MenuList>
    </Menu>
  )
}
