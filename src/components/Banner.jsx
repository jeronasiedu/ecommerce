import {
  Box,
  Circle,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper'
import { BiChevronRight } from 'react-icons/all'
import { Link } from 'react-router-dom'
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
  const categories = [
    { name: 'Electronics', icon: 'images/electronics.png' },
    { name: 'Apparel', icon: 'images/fashion.png' },
    { name: 'Smart Phones', icon: 'images/mobile.png' },
    { name: 'Services', icon: 'images/services.png' },
  ]
  return (
    <Flex
      w="100%"
      my="3"
      p="2"
      bg=""
      border="1px"
      borderColor="gray.300"
      rounded="sm"
    >
      <Box flex="0.4" px={2} d={['none', 'none', 'block']}>
        <Box p="2" borderBottom="2px" borderColor="gray.400" rounded="sm">
          <Text textTransform="uppercase" size="sm" pl="4" fontWeight="600">
            My Market
          </Text>
        </Box>
        <VStack mt="2" w="100%">
          {categories.map((category, idx) => (
            <Flex
              alignSelf="flex-start"
              align="center"
              justify="space-between"
              w="100%"
              p="1"
              key={idx}
              cursor="pointer"
              _hover={{
                shadow: 'md',
              }}
              role="group"
              as={Link}
              to={`category/${category.name
                .replace(/\s+/g, '-')
                .toLowerCase()}`}
            >
              <HStack>
                <Circle
                  w="2.2rem"
                  bg="blackAlpha.100"
                  h="2.2rem"
                  overflow="hidden"
                >
                  <Image
                    src={category.icon}
                    alt={category.name}
                    boxSize="100%"
                  />
                </Circle>
                <Text
                  _groupHover={{
                    color: 'blue.600',
                  }}
                >
                  {category.name}
                </Text>
              </HStack>
              <BiChevronRight size={22} />
            </Flex>
          ))}
        </VStack>
      </Box>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        style={{
          flex: '1',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        speed={1000}
        effect="fade"
      >
        {images.map((image, i) => (
          <SwiperSlide className="mySwiper" key={i}>
            <SingleImage {...image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  )
}

export default Banner
const SingleImage = ({ url, alt }) => (
  <Image
    src={url}
    alt={alt}
    objectFit="cover"
    boxSize="100%"
    flex="1"
    rounded="sm"
  />
)
