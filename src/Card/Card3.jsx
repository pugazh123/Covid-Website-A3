import React from "react";
import { Card } from "react-bootstrap";
import './Card.css'

export const Cards3=()=>{
    return(
        <Card className="Card" style={{borderWidth:10}}>
            <div className="cccc">
            <h2 >VACCINATION DETAILS</h2>
            <hr></hr>
            </div>
            <div className="ddd">
            <div className="dddd"  >
            <h2 >1,93,34,02,236</h2>
            <p>total vaccination doses </p>
            </div>
            <div className="ffff"  >
            <h2 >12,78,781</h2>
            <p>vaccination done today</p>
            
            
            </div>  
           
           
            </div>
           
            <div className="rr">
            <div className="hhhhh"  >
           
           <p>Get Vaaccinated</p>
           </div>
                <button style={{width:200,height:70}}><h3>Book your slot</h3></button>
                </div>        
        </Card>



    )
    
}
export default Cards3