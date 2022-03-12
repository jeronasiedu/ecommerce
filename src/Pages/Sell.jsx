import {
  Box,
  HStack,
  IconButton,
  Image,
  useMediaQuery,
  InputGroup,
  InputLeftAddon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react'
import { VscTrash, ImImage } from 'react-icons/all'
import { BiRecycle } from 'react-icons/all'
import ImageUploading from 'react-images-uploading'
import toast from 'react-hot-toast'
import MobileSellScreen from '../components/Sell/Mobile'
import DesktopSellScreen from '../components/Sell/Desktop'
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
    if (!mobile && category.value) {
      setDisableField(false)
      setDisableImageUpload(false)
    } else {
      setDisableImageUpload(false)
    }
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
export default Sell
export function ImageUploadComponent({
  images,
  saveImage,
  handleImageError,
  disableImageUpload,
}) {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={saveImage}
      maxNumber={5}
      dataURLKey="data_url"
      acceptType={['jpg', 'png']}
      onError={handleImageError}
      maxFileSize={5242880}
      // resolutionWidth={1000}
      // resolutionHeight={750}
      // resolutionType="more"
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
            overflowX="auto"
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
                className="image-upload-box"
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
  )
}
export function PriceInput({ disableField }) {
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
