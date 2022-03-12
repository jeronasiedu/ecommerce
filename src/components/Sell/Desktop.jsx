import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { ImageUploadComponent, PriceInput } from '../../Pages/Sell'
import Select from 'react-select'
import { GoLocation, FaRegUser, GoPackage } from 'react-icons/all'

const DesktopSellScreen = ({
  categories,
  images,
  saveImage,
  handleImageError,
  handleCategoryChange,
  disableField,
  disableImageUpload,
}) => {
  return (
    <VStack
      alignItems="flex-start"
      shadow="md"
      border="1px"
      borderColor="gray.300"
      mx="auto"
      p={3}
      spacing="3"
      mb={3}
    >
      <Heading
        size="lg"
        textTransform="capitalize"
        fontWeight="bold"
        alignSelf="center"
      >
        post Ad
      </Heading>
      <HStack w="full">
        <Select
          options={categories}
          onChange={handleCategoryChange}
          value={categories.selectedCategory}
          className="select-mobile"
          aria-label="Select filter for category"
          placeholder="Category *"
        />

        <InputGroup>
          <InputLeftElement children={<GoLocation />} />
          <Input
            type="text"
            placeholder="Your Location"
            maxLength={30}
            isDisabled={disableField}
          />
        </InputGroup>
      </HStack>
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
        <Text fontSize="xs" color="gray.500">
          Each Picture must not exceed 5MB
        </Text>
      </Box>
      <ImageUploadComponent
        images={images}
        saveImage={saveImage}
        handleImageError={handleImageError}
        disableImageUpload={disableImageUpload}
      />
      <HStack w="full">
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
        <PriceInput disableField={disableField} />
      </HStack>
      <Textarea
        placeholder="Product catchy Description"
        isRequired
        maxLength={200}
        isDisabled={disableField}
        minH="10rem"
        resize="none"
      />
      <HStack w="full">
        <InputGroup>
          <InputLeftElement children={<FaRegUser />} />
          <Input
            type="text"
            placeholder="Your Name"
            maxLength={20}
            isDisabled={disableField}
          />
        </InputGroup>
        <InputGroup>
          <InputLeftAddon children="+233" />
          <Input
            type="tel"
            placeholder="Your Phone number"
            maxLength={9}
            isDisabled={disableField}
          />
        </InputGroup>
      </HStack>
      <Box maxW={'md'} alignSelf="center">
        <Button w="full" colorScheme="linkedin">
          POST AD
        </Button>
        <Text fontSize="sm" color="gray.500" textAlign="center">
          By clicking on Post Ad, you accept the Terms of Use, confirm that you
          will abide by the Safety Tips, and declare that this posting does not
          include any Prohibited Items.
        </Text>
      </Box>
    </VStack>
  )
}

export default DesktopSellScreen
