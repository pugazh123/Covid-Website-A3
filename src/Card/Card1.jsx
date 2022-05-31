import React from "react";
import { Card } from "react-bootstrap";
import './Card.css'

export const Cards1=()=>{
    return(
        <Card className="Card" style={{borderWidth:10}}>
            <div className="cccc">
            <h2 >GLOBAL SITUATION</h2>
            <hr></hr>
            </div>
            <div className="ddd">
            <div className="dddd"  >
            <h2 >534,877</h2>
            <p>new cases </p>
            </div>
            <div className="ffff"  >
            <h2 >525,467,084</h2>
            <p>cumulative cases</p>
            <div className="hhhh"  >
            <h2 >6,285,171</h2>
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
export default Cards1