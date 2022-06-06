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

function App() {
  return (
    <div>
      <UIDrawer></UIDrawer>
      <Box>
        <Circle bg="tomato" color="white">
          {/* <Flex> */}
          <Text fontSize="4xl">Welcome to CabinShare</Text>
          {/* </Flex> */}
        </Circle>
      </Box>
      <Spacer />
      <Box>
        <Square bg="blue" color="white">
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
          <Button colorScheme="teal" size="md">
            Trips
          </Button>
          <Button colorScheme="teal" size="md">
            Activities
          </Button>
          <Button colorScheme="teal" size="md">
            Meals
          </Button>
          <Button colorScheme="teal" size="md">
            Inventories
          </Button>
        </Stack>
        </Center>
      </Box>
    </div>
  );
}

export default App;
