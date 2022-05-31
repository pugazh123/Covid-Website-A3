import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

import './footer.css'

export const Footer = (props) => {
  return(
    <div >
      <CardGroup className='abc'>
        <Card style={{borderColor:'gray',backgroundColor:'gray'}}><h3 className='v'>VACCINATION SERVICES</h3>
        <div className='s'>
      
        <p>Register Members</p>
        <p>Search Vaccination Centers</p>
        <p>Book Vaccination Slots</p>
        <p>Manage Appointment</p>
        <p>Download Certificate</p>

        </div>
        </Card>
        <Card style={{borderColor:'gray',backgroundColor:'gray'}}><h3 className='n'>RESOURCES</h3>
        <div className='m'>
        
        <p>How To Get Vaccinated</p>
        <p>Dos and Don'ts</p>
        <p>Overview</p>
        <p>Open API's</p>
        <p>Grievance Guidelines</p>

        </div>
        
        
        
        </Card>
        <Card style={{borderColor:'gray',backgroundColor:'gray'}}><h3 className='v'>CONTACT US</h3>
        <div className='s'>
      
        <p>Helpline : +91-11-23978046 (Toll Free - 1075 )</p>
        <p>Technical Helpline : 0120-4783222</p>
        <p>MENTAL HEALTH : 08046110007</p>
        <p>SENIOR CITIZENS : 14567</p>
        <p>CHILD : 1098</p>

        </div>
        
        
        </Card>
      </CardGroup>
      <Card style={{borderColor:'lightgray',backgroundColor:'lightgray'}}>
      <p className='a'>Copyright © 2021 CO-VID-19 WEBSITE. All Rights Reserved|GOVERNMENT OF AUTHORITY|Terms of Service Privacy Policy</p>
      </Card>
     
      
    </div>
   )
  }
  
     