import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  VStack,
} from '@chakra-ui/react'
import { BsGoogle, MdEmail } from 'react-icons/all'
function RegisterModal({ isOpen, onClose, mobile }) {
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        scrollBehavior="inside"
        size={mobile ? 'sm' : 'md'}
      >
        <ModalOverlay />
        <ModalContent bottom={['-30%', '0']}>
          <ModalHeader fontWeight="sm" color="gray.600">
            Sign In{' '}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <Button
                leftIcon={<BsGoogle />}
                w="full"
                colorScheme="blue"
                rounded="sm"
              >
                Sign In via Google
              </Button>
              <Button
                leftIcon={<MdEmail />}
                w="full"
                variant="outline"
                rounded="sm"
              >
                Continue with Email
              </Button>
            </VStack>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  )
}
export default RegisterModal
