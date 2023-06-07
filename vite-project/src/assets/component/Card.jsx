//import React from "react";

import { Box, Flex, Image, chakra,Button } from "@chakra-ui/react";
import {Link } from 'react-router-dom';

//import { Router, Route } from "react-router-dom";



export default function Card(props){

  return (
    
    <Flex
      bg="#edf3f8"
      _dark={{ bg: "#3e3e3e" }}
      p={110}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
    
      <Box
        maxW="lg"
        mx="auto"
        bg="white"
        _dark={{ bg: "gray.800" }}
        shadow="lg"
        rounded="lg"
      >
      <Flex
      alignItems="center"
      justifyContent="space-between"
      px={4}
      py={2}
      background={"#B93144"}
      roundedBottom="lg"
    >

      
    </Flex>
        <Box px={4} py={2}>
          <chakra.h1
            color="gray.800"
            _dark={{ color: "white" }}
            fontWeight="bold"
            fontSize="3xl"
            textTransform="uppercase"
          >
         
          {props.name} 
          </chakra.h1>
          <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >  
          
          {props.Dis}
          
          </chakra.p>
        </Box>

      
        <Image
         h={"full"}
         w={"full"}
         fit="cover"
          mt={5}
          src={props.img}
          alt="IBM"
        />

        <chakra.p
            mt={2}
            fontSize="sm"
            color="gray.600"
            _dark={{ color: "gray.400" }}
          >  
          
        {props.more}
          
        </chakra.p>


        <Flex
          alignItems="center"
          justifyContent="space-between"
          px={4}
          py={2}
          background={"#B93144"}
          roundedBottom="lg"
        >

        

        <Button background={"#B93144"} colorScheme="brand" size="md"> <Link to="/home/expanded"> expand</Link></Button>
        <Button background={"#B93144"} colorScheme="brand" size="md"> <Link to="/home"> close</Link> </Button>

          
        </Flex>
        
      </Box>
    </Flex>
  );
}

