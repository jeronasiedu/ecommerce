import {
  Box,
  Button,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
  useMediaQuery,
  VStack,
  Circle,
  chakra,
  InputGroup,
  InputLeftAddon,
  Input,
  InputLeftElement,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea,
} from '@chakra-ui/react'
import Select from 'react-select'
import { useState } from 'react'
import { MdCancel, ImImage } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
import { GoLocation, FaRegUser, GoPackage } from 'react-icons/all'
const Sell = () => {
  const [mobile] = useMediaQuery('(max-width:760px)')
  const categories = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Smart Phones', label: 'Smart Phones' },
    { value: 'Services', label: 'Services' },
  ]
  const [selectedCategory, setSelectedCategory] = useState(null)

  const images = [
    {
      name: 'review',
      src: '/images/review5.jpg',
    },
    {
      name: 'review',
      src: '/images/review8.jpg',
    },
    {
      name: 'review',
      src: '/images/review5.jpg',
    },
    {
      name: 'review',
      src: '/images/review9.jpg',
    },
  ]
  return (
    <Box>
      {mobile ? (
        <MobileSellScreen
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          images={images}
        />
      ) : (
        <DesktopSellScreen />
      )}
    </Box>
  )
}
const MobileSellScreen = ({ categories, setSelectedCategory, images }) => {
  const navigate = useNavigate()
  return (
    <Box
      shadow="md"
      w="100%"
      bg="white"
      mx="auto"
      p={3}
      border="1px"
      borderColor="gray.300"
    >
      <VStack alignItems="flex-start">
        <Select
          options={categories}
          onChange={setSelectedCategory}
          className="select-mobile"
          aria-label="Select filter for category"
          placeholder="Category *"
        />
        <Box>
          <Text fontWeight="semibold">Add Photo</Text>
          <Text fontSize="sm" color="gray.500">
            Add at least 1 photo for this category
          </Text>
          <Text fontSize="xs" color="gray.500">
            First Picture - is the title picture
          </Text>
        </Box>
        <HStack w="full" p={1}>
          <form>
            <Circle
              as="label"
              htmlFor="image"
              boxSize="5rem"
              bg="blue.400"
              rounded="sm"
              variant="outline"
              colorScheme="linkedin"
            >
              <ImImage size={30} color="#fff" />
            </Circle>
            <input
              type="file"
              name="product-image"
              id="image"
              accept=".jpg,.png"
              multiple
              style={{
                display: 'none',
              }}
            />
          </form>
          <HStack
            overflowX="scroll"
            w="auto"
            overflowY={'hidden'}
            scrollSnapType="x mandatory"
          >
            {images.map((image, i) => (
              <Box
                boxSize="5rem"
                minW="5rem"
                pos="relative"
                role="group"
                key={i}
                scrollSnapAlign="start"
              >
                <chakra.span
                  pos="absolute"
                  right="0.5"
                  top="0.5"
                  color="gray.500"
                  transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
                  opacity="0"
                  _groupHover={{
                    opacity: '1',
                  }}
                >
                  <MdCancel size={24} />
                </chakra.span>
                <Image
                  src={image.src}
                  alt="review5"
                  boxSize="full"
                  objectFit="cover"
                />
              </Box>
            ))}
          </HStack>
        </HStack>
        <VStack spacing={3}>
          <SellerInfo />
          <ProductInfo />
        </VStack>
        <Button w="full" colorScheme="linkedin">
          POST AD
        </Button>
      </VStack>
    </Box>
  )
}
const DesktopSellScreen = () => {
  return <Box>Desktop Sell Screen</Box>
}
export default Sell

function PriceInput({}) {
  return (
    <NumberInput precision={2} defaultValue={1} min={1} isRequired>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

function SellerInfo({}) {
  return (
    <>
      <Box>
        <Text>
          Your display name {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Jeron
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<FaRegUser />} />
          <Input type="text" placeholder="Your seller name" />
        </InputGroup>
      </Box>
      <Box>
        <Text>
          Where can we find you {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Ayeduase
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<GoLocation />} />
          <Input type="text" placeholder="Your location" />
        </InputGroup>
      </Box>
      <Box>
        <Text>
          How can we reach you {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: 544751048
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftAddon children="+233" />
          <Input type="tel" placeholder="phone number" maxLength={9} />
        </InputGroup>
      </Box>
    </>
  )
}

function ProductInfo({}) {
  return (
    <>
      {' '}
      <Box>
        <Text>
          Product Name {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Men's trouser
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<GoPackage />} />
          <Input
            type="text"
            placeholder="Product name"
            isRequired
            maxLength={50}
          />
        </InputGroup>
      </Box>
      <Box>
        <Text>
          Product Description {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: blah blah blah
          </chakra.span>
        </Text>
        <Textarea
          placeholder="Product catchy Description"
          isRequired
          maxLength={200} // isInvalid={false}
        />
      </Box>
      <Box>
        <Text>
          Product Price {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: 250
          </chakra.span>
        </Text>
        <PriceInput />
      </Box>
    </>
  )
}
