import React from 'react'
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
  import { Routes, Route, useNavigate, NavLink } from "react-router-dom";
  import Footer from "./Footer";
  import Header from "./Header";
  import logo from "./cabin.png";

function Home ({handleLogOutClick, user}){
    return (
        <div>
            <Header handleLogOutClick={handleLogOutClick} user={user}></Header>
      <Center>
        <Box width="50%">
          <Circle bg="orange" color="white">
            <Text fontSize="4xl">Welcome to</Text>
          </Circle>
          <Center>
            <Image height="100px" src={logo} />
          </Center>
        </Box>
      </Center>
      <Spacer />
      <Box>
        <Square bg="white" color="orange">
          <Text fontSize="2xl">
            Your one-stop application for planning your next shared cabin
            weekend.
          </Text>

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
    )
}

export default Home;