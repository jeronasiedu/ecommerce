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
  Heading,
} from '@chakra-ui/react'
import Select from 'react-select'
import { useState } from 'react'
import { VscTrash, ImImage } from 'react-icons/all'
import { useNavigate } from 'react-router-dom'
import { GoLocation, FaRegUser, GoPackage, BiRecycle } from 'react-icons/all'
import ImageUploading from 'react-images-uploading'
import toast from 'react-hot-toast'
const Sell = () => {
  const [mobile] = useMediaQuery('(max-width:760px)')
  const categories = [
    { value: 'Apparel', label: 'Apparel' },
    { value: 'Electronics', label: 'Electronics' },
    { value: 'Smart Phones', label: 'Smart Phones' },
    { value: 'Services', label: 'Services' },
  ]
  const [selectedCategory, setSelectedCategory] = useState({
    selectedCategory: null,
  })
  const [images, setImages] = useState([])
  const [disableField, setDisableField] = useState(true)
  const [disableImageUpload, setDisableImageUpload] = useState(true)
  const saveImage = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList)
    if (imageList.length > 0) {
      setDisableField(false)
    } else {
      setDisableField(true)
    }
  }
  const handleImageError = (errors, files) => {
    let errorMessage = 'There was an error uploading image try another one'
    const { maxFileSize, resolution, maxNumber } = errors
    if (maxFileSize) {
      errorMessage = 'Max file size exceeded, try a different image'
    } else if (resolution) {
      errorMessage = 'Image size is too small, try a bigger one'
    } else if (maxNumber) {
      errorMessage = 'Maximum number of images reached'
    }
    toast.error(errorMessage)
  }
  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (mobile && category.value) {
      return setDisableImageUpload(false)
    }
    setDisableField(false)
  }
  return (
    <Box>
      {mobile ? (
        <MobileSellScreen
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          images={images}
          saveImage={saveImage}
          handleImageError={handleImageError}
          handleCategoryChange={handleCategoryChange}
          disableField={disableField}
          disableImageUpload={disableImageUpload}
        />
      ) : (
        <DesktopSellScreen
          categories={categories}
          setSelectedCategory={setSelectedCategory}
          images={images}
          saveImage={saveImage}
          handleImageError={handleImageError}
          handleCategoryChange={handleCategoryChange}
          disableField={disableField}
          disableImageUpload={disableImageUpload}
        />
      )}
    </Box>
  )
}
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
    >
      <Heading
        textAlign="center"
        size="lg"
        textTransform="capitalize"
        fontWeight="bold"
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
      </Box>
    </VStack>
  )
}
const MobileSellScreen = ({
  categories,
  images,
  saveImage,
  handleImageError,
  handleCategoryChange,
  disableField,
  disableImageUpload,
}) => {
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
        <ImageUploading
          multiple
          value={images}
          onChange={saveImage}
          maxNumber={5}
          dataURLKey="data_url"
          acceptType={['jpg', 'png']}
          onError={handleImageError}
          maxFileSize={5242880}
          resolutionWidth={1000}
          resolutionHeight={750}
          resolutionType="more"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            <HStack w="full" p={1}>
              <IconButton
                boxSize="5rem"
                rounded="sm"
                variant="solid"
                onClick={onImageUpload}
                colorScheme="linkedin"
                isDisabled={disableImageUpload}
              >
                <ImImage size={30} color="#fff" />
              </IconButton>
              <HStack
                overflowX="scroll"
                w="auto"
                overflowY={'hidden'}
                scrollSnapType="x mandatory"
              >
                {imageList.map((image, key) => (
                  <Box
                    key={key}
                    boxSize="5rem"
                    minW="5rem"
                    pos="relative"
                    role="group"
                    scrollSnapAlign="start"
                  >
                    <IconButton
                      icon={<BiRecycle size={18} />}
                      size="xs"
                      pos="absolute"
                      left="0.5"
                      top="1"
                      variant="ghost"
                      colorScheme="blue"
                      isRound
                      onClick={() => onImageUpdate(key)}
                      transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
                    />
                    <IconButton
                      icon={<VscTrash size={18} />}
                      size="xs"
                      pos="absolute"
                      right="0.5"
                      top="1"
                      variant="ghost"
                      colorScheme="red"
                      isRound
                      transition="0.5s cubic-bezier(0.23, 1, 0.320, 1)"
                      onClick={() => onImageRemove(key)}
                    />
                    <Image
                      src={image['data_url']}
                      alt="review5"
                      boxSize="full"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </HStack>
            </HStack>
          )}
        </ImageUploading>
        <VStack spacing={3} w="full">
          <SellerInfo disableField={disableField} />
          <ProductInfo disableField={disableField} />
        </VStack>
        <Button w="full" colorScheme="linkedin">
          POST AD
        </Button>
        <Text fontSize="sm" color="gray.500">
          By clicking on Post Ad, you accept the Terms of Use, confirm that you
          will abide by the Safety Tips, and declare that this posting does not
          include any Prohibited Items.
        </Text>
      </VStack>
    </Box>
  )
}

export default Sell

function PriceInput({ disableField }) {
  return (
    <InputGroup>
      <InputLeftAddon children="GH₵" />
      <NumberInput
        precision={2}
        defaultValue={1}
        min={1}
        isRequired
        isDisabled={disableField}
      >
        <NumberInputField roundedTopStart="none" roundedBottomStart="none" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </InputGroup>
  )
}

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
          maxLength={200} // isInvalid={false}
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
