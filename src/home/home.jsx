import React from 'react'

import './home.css'

import { Card, CardGroup } from 'react-bootstrap'
import Cards1 from '../Card/Card1'
import Cards2 from '../Card/Card2'
import Cards3 from '../Card/Card3'
import { NavBar } from '../header/nav'

import { Carousela } from '../Carousel/Carousel'
import { Vaccinated } from '../Vaccinated/Vaccinated'
import { Footer } from '../footer/footer'



export const Home = () => {
  return(
    <div>
      <NavBar/>
      <p className='anime'>***Clean your hands frequently with alcohol-based hand rub or soap and water.
Cover your mouth and nose with a bent elbow or tissue when you cough or sneeze</p>
      <Carousela/>


      <CardGroup className='hello' >
        
        <Cards1 />
        <Cards2/>
        <Cards3 />
        
        
      </CardGroup>
      
      
      <Vaccinated />
      <Footer/>
    </div>
   )
  }
