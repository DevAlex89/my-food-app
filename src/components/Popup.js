import React, { useRef } from 'react'
import {Modal, ModalOverlay, ModalHeader,ModalBody, ModalContent, ModalFooter, Button, ModalCloseButton, useDisclosure, Text, Container} from '@chakra-ui/react'

function Popup(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const focusRef = useRef()

  return (
      
        <Container>
            <Button onClick={onOpen} color="#114d4d"
              variant="ghost"
              borderColor="#114d4d"
              border="1px solid"
              w={'full'}
              _hover={{ bg: '#114d4d', color: 'white' }} >{props.text}</Button>
            <Modal finalFocusRef={focusRef} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                    <ModalHeader mt={3}>{props.header}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{props.body}</Text>
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
  
  )
}

export default Popup