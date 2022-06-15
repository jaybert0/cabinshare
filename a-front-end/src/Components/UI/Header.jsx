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
  Link,
} from "@chakra-ui/react";
import logo from "./cabin.png";
import UIDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";



function Header() {
  const navigate = useNavigate()

  return (
    <header>
      <Box w="100%" bg="white">
        <Flex>
          <Box p="5">
            <Image height="50px" objectFit="contain" src={logo} />
          </Box>
          <Spacer />
          <Circle color="orange" cursor="pointer"> Login </Circle>
          <Box p="5">
            <UIDrawer />
          </Box>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
