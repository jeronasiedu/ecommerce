import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { useSearchParams, useParams } from 'react-router-dom'
import {
  MdCheckCircle,
  BiChat,
  BsFlag,
  BiChevronRight,
  BiChevronLeft,
} from 'react-icons/all'
import { useState } from 'react'
const Cart = () => {
  const { name } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')
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
  const tips = [
    "Don't send any prepayments",
    'Meet with the seller at a safe public place',
    "Inspect what you're going to buy to make sure it's what you need",
    "Check all the docs and only pay if you're satisfied",
  ]
  const [previews, setPreviews] = useState(images)
  const [activePreview, setActivePreview] = useState(0)
  const handleNext = () => {
    if (activePreview > previews.length - 2) {
      return setActivePreview(0)
    } else {
      setActivePreview(activePreview + 1)
    }
  }
  const handlePrev = () => {
    if (activePreview < 1) {
      return setActivePreview(previews.length - 1)
    } else {
      setActivePreview(activePreview - 1)
    }
  }
  const handleImageClick = (idx) => {
    setActivePreview(idx)
  }
  return (
    <Box w="100%" mb="3">
      <Flex w="100" h="100%" gap="2" direction={['column', 'row']}>
        <Box flex="0.65">
          <VStack w="100" h="100%">
            <Box h={['14rem', '24.5rem']} w="100%" pos="relative">
              <Image
                boxSize="100%"
                src={previews[activePreview].url}
                alt="Review Image"
                objectFit="cover"
              />
              <Button
                pos="absolute"
                top="0"
                rounded="none"
                left="0"
                h="100%"
                variant="ghost"
                colorScheme="blackAlpha"
                onClick={handlePrev}
              >
                <BiChevronLeft size={22} />
              </Button>
              <Button
                pos="absolute"
                top="0"
                rounded="none"
                right="0"
                h="100%"
                variant="ghost"
                colorScheme="blackAlpha"
                onClick={handleNext}
              >
                <BiChevronRight size={22} />
              </Button>
            </Box>
            <HStack w="100%" flex="1" border="1px" borderColor="gray.300" p="1">
              {images.map((image, idx) => (
                <Box
                  w="20%"
                  h="100%"
                  cursor="pointer"
                  key={idx}
                  onClick={() => handleImageClick(idx)}
                  border={activePreview === idx ? '2px' : '0'}
                  borderColor="blue.400"
                  rounded="sm"
                  overflow="hidden"
                >
                  <Image
                    key={idx}
                    src={image.url}
                    alt="image"
                    boxSize="100%"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </HStack>
          </VStack>
        </Box>
        {/* RIGHT SIDE */}
        <Box flex="0.35">
          <VStack>
            {/* FIRST BOX */}
            <VStack
              shadow="md"
              w="100%"
              p="3"
              alignItems={'flex-start'}
              border="1px"
              borderColor="gray.300"
            >
              <Text fontSize="3xl" fontWeight="600">
                GH₵ 540
              </Text>
              <Button w="100%" colorScheme="blue" variant="outline">
                Make an offer
              </Button>
            </VStack>
            {/* SECOND BOX */}
            <VStack
              shadow="md"
              w="100%"
              p="3"
              alignItems={'flex-start'}
              border="1px"
              borderColor="gray.300"
            >
              <HStack>
                <Avatar>
                  <AvatarBadge
                    boxSize="1em"
                    bg="green.500"
                    borderColor="green.100"
                  />
                </Avatar>
                <VStack alignSelf="flex-start" fontWeight="600" spacing="1">
                  <Text>Jonathan Day</Text>
                  <Badge alignSelf="flex-start" fontSize="0.6em">
                    2y 7m on J-Mart
                  </Badge>
                </VStack>
              </HStack>
              <Button w="100%" colorScheme="blue">
                Show Contact
              </Button>
              <Button
                w="100%"
                colorScheme="blue"
                variant="outline"
                leftIcon={<BiChat />}
              >
                Start Chat
              </Button>
            </VStack>
            {/* THIRD BOX */}
            <VStack
              shadow="md"
              w="100%"
              p="3"
              border="1px"
              borderColor="gray.300"
            >
              <Text fontSize="lg" fontWeight="600">
                Safety Tips
              </Text>
              <List>
                {tips.map((tip, i) => (
                  <ListItem key={i} fontSize="sm">
                    <ListIcon as={MdCheckCircle} color="green.500" size="sm" />
                    {tip}
                  </ListItem>
                ))}
              </List>
              <Button leftIcon={<BsFlag color="red" />} size="sm" rounded="sm">
                Report Abuse
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Flex>
    </Box>
  )
}

export default Cart
