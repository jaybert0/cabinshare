import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { Box, Flex, Spacer, Text, Center, Square, Circle } from '@chakra-ui/react'
import UIDrawer from './Components/UI/Drawer'



function App() {
  return (
        
    <div>
      <UIDrawer></UIDrawer>
      <Box>
      <Circle bg='tomato' color='white'>
        {/* <Flex> */}
      <Text fontSize="4xl">Welcome to CabinShare</Text>
      {/* </Flex> */}
      </Circle>
      </Box>
      <Spacer/>
      <Box>
      <Square bg='blue' color='white'>
        {/* <Flex> */}
      <Text fontSize="2xl">Your one-stop application for planning your next shared cabin weekend.</Text>
      {/* </Flex> */}
      </Square>
      </Box>
      </div>
     

      
  );
}

export default App;
