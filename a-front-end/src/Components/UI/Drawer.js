import {
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    useDisclosure,
    Stack
  } from '@chakra-ui/react'
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";


function UIDrawer({handleLogOutClick, user}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    function showLogout (){
      if (user !== null){
        return <Button onClick={handleLogOutClick}>Logout</Button>
      }
    }
  
    return (
      <>
        <Button ref={btnRef} colorScheme='orange' onClick={onOpen}>
        ≡
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>CabinShare</DrawerHeader>
  
            <DrawerBody>
            <Stack spacing={4} direction="column" 
            // align="center"
            >
          <Button colorScheme="orange" size="md">
            Trips
          </Button>
          <Button colorScheme="orange" size="md">
            Activities
          </Button>
          <Button colorScheme="orange" size="md">
            Meals
          </Button>
          <Button colorScheme="orange" size="md">
            Inventories
          </Button>
          {showLogout()}
        </Stack>
            </DrawerBody>

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='orange'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default UIDrawer;