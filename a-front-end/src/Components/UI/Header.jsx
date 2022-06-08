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
  import logo from './cabin.png'

  function Header() {
    return (
      <header>
        <Box
          w='100%'
          bg="white"
        //   color="white"
        >
          <Container maxWidth="lg">
            <Box textAlign="center" pt={{ xs: 2, sm: 3 }} pb={{ xs: 2, sm: 3 }}>
              <Image src={logo}/>
            </Box>
          </Container>
        </Box>
      </header>
    );
  }

  export default Header