import {
  Box,
  Image,
  HStack,
  Flex,
  VStack,
  Text,
  IconButton,
  Divider,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {
  BiPhone,
  GiTakeMyMoney,
  IoTrendingUpSharp,
  FaRecycle,
  GiNestedHearts,
  BiHomeAlt,
  GiClothes,
  CgSmartphone,
  GiCircuitry,
  GoDeviceCamera,
} from 'react-icons/all'
import { Swiper, SwiperSlide } from 'swiper/react'
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectFlip,
} from 'swiper'
const Banner = () => {
  const images = [
    {
      url: '/images/review1.jpg',
      alt: 'picture',
    },
    {
      url: '/images/review2.jpg',
      alt: 'picture',
    },
    {
      url: '/images/review4.jpg',
      alt: 'picture',
    },
    {
      url: '/images/review5.jpg',
      alt: 'picture',
    },
    {
      url: '/images/review6.jpg',
      alt: 'picture',
    },
  ]
  const rightBar = [
    {
      body: 'Help Center',
      text: 'How can we help you?',
      icon: <BiPhone />,
    },
    {
      body: 'Sell on Jumia',
      text: 'Make a lot of money',
      icon: <GiTakeMyMoney />,
    },
    {
      body: 'Trending',
      text: 'The right ones for you',
      icon: <IoTrendingUpSharp />,
    },
    {
      body: 'Easy Return',
      text: 'Up to 5 days',
      icon: <FaRecycle />,
    },
    {
      body: 'Find the Best',
      text: 'Only the products you love',
      icon: <GiNestedHearts />,
    },
  ]
  const leftBar = [
    {
      body: 'Electronic',
      text: 'Get in touch with our experts',
      icon: <GiCircuitry />,
    },
    {
      body: 'Phones',
      text: 'Make a lot of money',
      icon: <CgSmartphone />,
    },
    {
      body: 'Accessories',
      text: 'Only the products you love',
      icon: <GoDeviceCamera />,
    },
    {
      body: 'Clothes & Fashion',
      text: 'The right ones for you',
      icon: <GiClothes />,
    },
    {
      body: 'Home & Office',
      text: 'Up to 5 days',
      icon: <BiHomeAlt />,
    },
  ]
  return (
    <Box w="100%" h="100%" py="3">
      <Swiper
        modules={[
          Pagination,
          Navigation,
          Autoplay,
          EffectFade,
          EffectCube,
          EffectFlip,
        ]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        speed={1000}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((image, i) => (
          <SwiperSlide className="mySwiper" key={i}>
            <SingleImage {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}

export default Banner
const SingleImage = ({ url, alt }) => (
  <Image
    src={url}
    alt={alt}
    objectFit="cover"
    boxSize="100%"
    borderRadius="sm"
    scrollSnapAlign="start"
    flex="1"
  />
)
