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
} from "@chakra-ui/react";
import logo from "./cabin.png";
import UIDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({handleLogOutClick, user}) {

  function showLogin (){
    if (user === null){
      return <Link to="/login">Login</Link>
    }
    else {
      return user.name
    }
  }
 

  return (
    <header>
      <Box w="100%" bg="white">
        <Flex>
          <Box p="5">
            <Image height="50px" objectFit="contain" src={logo} />
          </Box>
          <Spacer />
          <Circle color="Orange">
          {showLogin()}
          </Circle>
          <Box p="5">
            <UIDrawer handleLogOutClick={handleLogOutClick} user={user}/>
          </Box>
        </Flex>
      </Box>
    </header>
  );
}

export default Header;
