import React from "react";

//import Register from "../component/Register";
import ToggleColorMode from "./ToggleColorMode";
import Logo from "../logo.png"
import { Link } from 'react-router-dom';

import {
    chakra,
    Box,
    Flex,
    useColorModeValue,
    VisuallyHidden,
    HStack,
    Button,
    useDisclosure,
    VStack,
    IconButton,
    CloseButton,
  } from "@chakra-ui/react";
  import { AiOutlineMenu } from "react-icons/ai";

  
  export default function Nav(props){
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
  
    return (
      <React.Fragment>
        <chakra.header
          bg={"#DFDBE5"}
          w="full"
          px={{ base: 2, sm: 4 }}
          py={4}
          shadow="md"
        
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <img src= {Logo} width={120} height={120}/>
            <Flex>
            
              <chakra.a
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
               
                <VisuallyHidden>Samar Journey</VisuallyHidden>
                
              </chakra.a>
              
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
               Welcome to my Story 
              </chakra.h1>
              
              
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}  
                color="black"
                display={{ base: "none", md: "inline-flex" }}
              >

              <Link to="/" >{props.home}</Link>
              <br/>
              <Button background={"#B93144"} colorScheme="brand" size="md" > <Link to="/about">My all Story</Link> </Button>
                            
              </HStack>
            
              <Box display={{ base: "inline-flex", md: "none" }}>
                <IconButton
                  display={{ base: "flex", md: "none" }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{ color: "inherit" }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  zIndex={10}
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
                  <ToggleColorMode/>

                  <Link to="/" >{props.home}</Link>
                  
                  <Button colorScheme="brand" size="md"> <Link to="/about">My all Story</Link> </Button>
    

                </VStack>
              </Box>
            </HStack>
          </Flex>
        </chakra.header>
      </React.Fragment>
    );
  };
  