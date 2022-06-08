import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Text,
  Center,
  Square,
  Circle,
  Image,
  Stack,
  Button,
} from "@chakra-ui/react";
import UIDrawer from "./Components/UI/Drawer";
import Footer from "./Components/UI/Footer";
import Header from "./Components/UI/Header"

function App() {
  return (
    <div>
      <Header></Header>
      <Box>
      <UIDrawer></UIDrawer>
        <Circle bg="orange" color="white">
          {/* <Flex> */}
          <Text fontSize="4xl">Welcome to CabinShare</Text>
          {/* </Flex> */}
        </Circle>
      </Box>
      <Spacer />
      <Box>
        <Square bg="white" color="orange">
          {/* <Flex> */}
          <Text fontSize="2xl">
            Your one-stop application for planning your next shared cabin
            weekend.
          </Text>
          {/* </Flex> */}
        </Square>
        <Center>
          <Image src="https://vancouverisland.travel/app/uploads/2021/04/wood-cabin-on-vancouver-island_BenGiesbrecht.jpg" />
        </Center>
        <Center>
        <Stack spacing={4} direction="row" align="center">
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
        </Stack>
        </Center>
      </Box>
    <Footer></Footer>
    </div>
  );
}

export default App;
