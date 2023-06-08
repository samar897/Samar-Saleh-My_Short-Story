import About from "../component/About";
import Notfound from "../component/Notfound";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Home from "../component/Home"; 

import { Box,SimpleGrid } from '@chakra-ui/react';


import {Route, Routes } from 'react-router-dom';
import Card from "../component/Card";
//import HomeExpanded from "./HomeExpanded";
import Images11 from '../component/IBM.jpg'
import SDAIA from '../component/SDAIA.jpg'
import Photo from '../component/photo1.jpg'

export default function RouterOutlet() {
  return (
<Box>

<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="/*" element={<Notfound/>}></Route>

<Route>
 <Route path="/home" element={
      
      <div>
   

      <Home/>
      
      </div>}
      
      >
        
      </Route>
      <Route path="/home/expanded" element={
        
        <div>
        <Nav></Nav>

        <SimpleGrid columns={3} spacingX='40px' spacingY='20px'>


        <Card name="Tuwaiq BootCamp" Dis="Java Script BootCamp with Tuwaiq" img={Photo} more="I am Starting New Journey 2-month web browser development javascript camp "></Card>

        <Card name="IBM" Dis="I graduated from the second batch in The System z Software Engineer Program for one year"  img={Images11}
        more="The program was about system Z, it included Bootcamps for Z in different fields like the operating system for z/OS , RACF , DB2 , Unix, CICS and MQ websphere"></Card>


        <Card name="SDAIA" Dis="Junior System Engineer At SDAIA, I complete one year" img={SDAIA} more="The second woman in the field of System z Operation Engineer at (IBM) in the Kingdom of Saudi Arabia"></Card>

        
        </SimpleGrid>
 
        <Footer></Footer>
      </div>
    }
    
      >
      
      </Route>


</Route>



</Routes>


      
</Box>
  )
}
