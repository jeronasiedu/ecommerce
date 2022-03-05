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
} from '@chakra-ui/react'
import Select from 'react-select'
import { useState } from 'react'
import { BiChevronLeft, ImImage } from 'react-icons/all'
const Sell = () => {
  const [mobile] = useMediaQuery('(max-width:760px)')
  const categories = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Smart Phones', label: 'Smart Phones' },
    { value: 'Services', label: 'Services' },
  ]
  const [selectedCategory, setSelectedCategory] = useState(null)
  const locations = [
    {
      value: 'Ayeduase',
      label: 'Ayeduase',
    },
    {
      value: 'Engineering Gate',
      label: 'Engineering Gate',
    },
    {
      value: 'Queens Hall',
      label: 'Queens Hall',
    },
    {
      value: 'Indece Hall',
      label: 'Indece',
    },
    {
      value: 'Republic Hall',
      label: 'Republic Hall',
    },
  ]
  return (
    <Box>
      {mobile ? (
        <MobileSellScreen
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
      ) : (
        <DesktopSellScreen />
      )}
    </Box>
  )
}
const MobileSellScreen = ({ categories, setSelectedCategory }) => {
  return (
    <Box shadow="md" w="100%" bg="white" h="25rem" mx="auto" p={3}>
      <HStack mb={2} w="full">
        <IconButton
          size="sm"
          icon={<BiChevronLeft size={22} />}
          variant="outline"
          colorScheme="linkedin"
          rounded="sm"
        />
        <Spacer />
        <Button size="sm" rounded="sm" variant="outline" colorScheme="red">
          Clear
        </Button>
      </HStack>
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
        <HStack w="full">
          <form>
            <IconButton
              icon={<ImImage size={22} />}
              as="label"
              htmlFor="image"
              size="lg"
              rounded="sm"
              variant="outline"
              colorScheme="linkedin"
            />
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
          {/* <HStack overflow="scroll" overflowY={'hidden'}>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
            <Box w="4rem" h="3rem">
              <Image
                src="/images/review4.jpg"
                alt="review"
                boxSize="full"
                objectFit="cover"
              />
            </Box>
          </HStack> */}
        </HStack>
      </VStack>
    </Box>
  )
}
const DesktopSellScreen = () => {
  return <Box>Desktop Sell Screen</Box>
}
export default Sell
