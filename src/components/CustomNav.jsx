import {
  Avatar,
  Heading,
  HStack,
  IconButton,
  Image,
  Spacer,
  Tooltip,
  useMediaQuery,
} from '@chakra-ui/react'
import { SideMenu } from './Navigation'
import {
  FiChevronLeft,
  BsBookmarkHeart,
  HiOutlineViewGridAdd,
  GiSellCard,
} from 'react-icons/all'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../logo.png'
const CustomNav = () => {
  const navigate = useNavigate()
  let { pathname } = useLocation()
  const [mobile] = useMediaQuery('(max-width: 768px)')
  const url = pathname.split('/')[1]
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
  return (
    <HStack
      w="full"
      bg="white"
      p={2.5}
      shadow="sm"
      pos="sticky"
      top="0"
      left="0"
      zIndex={999}
      mb={2}
    >
      {mobile ? (
        <IconButton
          icon={<FiChevronLeft size={22} />}
          onClick={() => navigate(-1)}
          variant="outline"
        />
      ) : (
        <Image
          src={logo}
          alt="logo"
          minW="5.2rem"
          w="5.2rem"
          cursor="pointer"
          onClick={() => navigate('/')}
        />
      )}

      <Spacer />
      <Heading textTransform="uppercase" letterSpacing="1px" size="md">
        {url}
      </Heading>
      <Spacer />
      {mobile ? (
        <SideMenu />
      ) : (
        desktopIcons.map((item, key) => (
          <Tooltip label={item.label} key={key}>
            <IconButton
              icon={item.icon}
              size="sm"
              onClick={() => navigate(item.to)}
            />
          </Tooltip>
        ))
      )}
      {!mobile && (
        <Avatar
          size="sm"
          src="/images/user.jpg"
          alt="user avatar"
          cursor="pointer"
          onClick={() => navigate('/profile')}
        />
      )}
    </HStack>
  )
}

export default CustomNav
