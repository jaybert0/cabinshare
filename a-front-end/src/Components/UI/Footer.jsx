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

  function Footer() {
    return (
      <footer>
        <Box
          w='100%'
          bg="orange"
        //   color="white"
        >
          <Container maxWidth="lg">
            <Box textAlign="center" pt={{ xs: 2, sm: 3 }} pb={{ xs: 2, sm: 3 }}>
              CABINSHARE© 2022
            </Box>
          </Container>
        </Box>
      </footer>
    );
  }

  export default Footer