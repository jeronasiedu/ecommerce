import {
  Box,
  Button,
  InputGroup,
  InputLeftAddon,
  Text,
  VStack,
  chakra,
  Input,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react'
import Select from 'react-select'
import { ImageUploadComponent, PriceInput } from '../../Pages/Sell'
import { GoLocation, FaRegUser, GoPackage } from 'react-icons/all'

const MobileSellScreen = ({
  categories,
  images,
  saveImage,
  handleImageError,
  handleCategoryChange,
  disableField,
  disableImageUpload,
}) => {
  return (
    <Box
      shadow="md"
      w="100%"
      bg="white"
      mx="auto"
      p={3}
      border="1px"
      mb={3}
      borderColor="gray.300"
    >
      <VStack alignItems="flex-start">
        <Select
          options={categories}
          onChange={handleCategoryChange}
          value={categories.selectedCategory}
          className="select-mobile"
          aria-label="Select filter for category"
          placeholder="Category *"
        />
        <Box>
          <Text
            fontWeight="semibold"
            color={disableImageUpload ? 'gray.500' : 'black'}
          >
            Add Photo
          </Text>
          <Text fontSize="sm" color="gray.500">
            Add at least 1 photo for this category
          </Text>
          <Text fontSize="xs" color="gray.500">
            First Picture - is the title picture.
          </Text>
        </Box>
        <ImageUploadComponent
          images={images}
          saveImage={saveImage}
          handleImageError={handleImageError}
          disableImageUpload={disableImageUpload}
        />
        <VStack spacing={3} w="full">
          <ProductInfo disableField={disableField} />
          <SellerInfo disableField={disableField} />
        </VStack>
        <Button w="full" colorScheme="linkedin">
          POST AD
        </Button>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          By clicking on Post Ad, you accept the Terms of Use, confirm that you
          will abide by the Safety Tips, and declare that this posting does not
          include any Prohibited Items.
        </Text>
      </VStack>
    </Box>
  )
}
export default MobileSellScreen

function SellerInfo({ disableField }) {
  return (
    <>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          Your display name {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Jeron
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<FaRegUser />} />
          <Input
            type="text"
            placeholder="Your Name"
            maxLength={20}
            isDisabled={disableField}
          />
        </InputGroup>
      </Box>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          Where can we find you {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Ayeduase
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<GoLocation />} />
          <Input
            type="text"
            placeholder="Your Location"
            maxLength={30}
            isDisabled={disableField}
          />
        </InputGroup>
      </Box>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          How can we reach you {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: 544751048
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftAddon children="+233" />
          <Input
            type="tel"
            placeholder="Your Phone number"
            maxLength={9}
            isDisabled={disableField}
          />
        </InputGroup>
      </Box>
    </>
  )
}

function ProductInfo({ disableField }) {
  return (
    <>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          Product Name {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: Men's trouser
          </chakra.span>
        </Text>
        <InputGroup>
          <InputLeftElement children={<GoPackage />} />
          <Input
            type="text"
            placeholder="Product Name"
            isRequired
            maxLength={50}
            isDisabled={disableField}
          />
        </InputGroup>
      </Box>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          Product Description {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: blah blah blah
          </chakra.span>
        </Text>
        <Textarea
          placeholder="Product catchy Description"
          isRequired
          maxLength={200}
          isDisabled={disableField}
          minH="8rem"
        />
      </Box>
      <Box w="full">
        <Text color={disableField ? 'gray.500' : 'black'}>
          Product Price {''}
          <chakra.span color="gray.400" fontSize="sm">
            eg: 250
          </chakra.span>
        </Text>
        <PriceInput disableField={disableField} />
      </Box>
    </>
  )
}
