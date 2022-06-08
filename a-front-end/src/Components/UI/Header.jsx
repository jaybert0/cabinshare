import {
    Box,
    Container,
    Flex,
    Spacer,
    Text,
    Center,
    Square,
    Circle,
    Image,
    Stack,
    Button,
    Link
  } from "@chakra-ui/react";
  import logo from './cabin.png';
  import UIDrawer from "./Drawer";


  function Header() {
    return (
      <header>
        <Box
          w='100%'
          bg="white"
        //   color="white"
        >
          {/* <Container maxWidth="lg"> */}
            <Flex 
            // direction="row" 
            // textAlign="center" pt={{ xs: 2, sm: 3 }} pb={{ xs: 2, sm: 3 }}
            >
              <Box p='5'>
              <Image height='50px' objectFit='contain' src={logo}/>
              </Box>
              <Spacer />
              <Box p='5'>
              <UIDrawer/>
              </Box>
            </Flex>
          {/* </Container> */}
        </Box>
      </header>
    );
  }

  export default Header