import React, { useRef } from 'react'
import {Modal, ModalOverlay, ModalHeader,ModalBody, ModalContent, ModalFooter, Button, ModalCloseButton, useDisclosure, Text, Container} from '@chakra-ui/react'

function Popup(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const focusRef = useRef()

  return (
      <>
        <Container>
            <Button onClick={onOpen} colorScheme='teal' variant={'ghost'} >Delete Account</Button>
            <Modal finalFocusRef={focusRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader>Are you sure you want to delete your account?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>this action is irreversible</Text>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='teal' variant={'outline'} mr={3} onClick={onClose}>
                        No
                        </Button>
                        <Button variant='outline' colorScheme={'teal'} onClick={props.action}>Yes</Button>
                    </ModalFooter>
                    </ModalContent>
                </Modal>
            </Container>
  </>
  )
}

export default Popup