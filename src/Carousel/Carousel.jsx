import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css'

export function Carousela(){
    return(<div className="caro">
        <Carousel fade>
        <Carousel.Item>
            
          <img width={1500} height={550} 
 
            src="https://images.pexels.com/photos/3952238/pexels-photo-3952238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="b">Better Protection to Give Strong Fight Against COVID-19</h3>
            
          </Carousel.Caption>
         
        </Carousel.Item>
        <Carousel.Item>
          <img width={1350} height={550}
     
            src="https://images.pexels.com/photos/4481591/pexels-photo-4481591.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Second slide"
          />
      
          <Carousel.Caption>
            <h3  className="b">Prevent yourself with using Mask</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1500} height={550}
          
            src="https://images.pexels.com/photos/3970327/pexels-photo-3970327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
          />
      
          <Carousel.Caption>
            <h3  className="b">Coronavirus disease (COVID-19) pandemic</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    )
}