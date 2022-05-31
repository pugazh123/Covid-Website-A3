import React from "react";
import { Card } from "react-bootstrap";
import './Card.css'

export const Cards2=()=>{
    return(
        
        <Card className="Card" style={{borderWidth:10}}>
            <div className="cccc">
            <h2 >INDIA SITUATION</h2>
            <hr></hr>
            </div>
            <div className="ddd">
            <div className="dddd"  >
            <h2 >74,877</h2>
            <p>new cases </p>
            </div>
            <div className="ffff"  >
            <h2 >4,32,00,000</h2>
            <p>cumulative cases</p>
            <div className="hhhh"  >
            <h2 >5,25,000</h2>
            <p >cumulative deaths</p>
            </div>
           
            
            </div>  
            </div>
            <div className="gggg">
                <button style={{width:200,height:70}}><h3>See more...</h3></button>
                </div>        
            
        
        </Card>



    )
    
}
export default Cards2