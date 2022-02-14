import { Box, Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
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

  return (
    <Box w="100%" h="100%" py="3">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
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
    scrollSnapAlign="start"
    flex="1"
  />
)
