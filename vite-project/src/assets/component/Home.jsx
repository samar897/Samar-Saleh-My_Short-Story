

//import Images from '../public/unnamed.jpg'
//import { Route, Routes, Link } from 'react-router-dom';
//import Images2 from '../public/unnamed2.jpg'
//import Images3 from '../public/unnamed3.jpg'
//import About from "./assets/component/About";
//import Notfound from "./assets/component/Notfound";
//import ToggleColorMode from "./assets/component/ToggleColorMode";
//import { Link } from 'react-router-dom';

import {
  Box,SimpleGrid,
} from '@chakra-ui/react'
//import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

//import Display1 from "./assets/component/Display1";
import Card from "./Card";
import Images11 from '../component/IBM.jpg'
import SDAIA from '../component/SDAIA.jpg'
import Photo from '../component/photo1.jpg'


//<Route path="/*" element={<p> the page not found </p>}></Route>


export default function Home() {
  return (

    <Box>

<Nav></Nav>

    <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>

  


    <Card name="Tuwaiq BootCamp" Dis="Java Script BootCamp with Tuwaiq" img={Photo} ></Card>

    
    <Card name="IBM" Dis="I graduated from the second batch in The System z Software Engineer Program for one year"   img={Images11}></Card>
    
    <Card name="SDAIA" Dis="Junior System Engineer At SDAIA, I complete one year" img={SDAIA} ></Card>

    

    </SimpleGrid>
  <Footer></Footer>



</Box>

  )
}
