import { Card, CardGroup } from "react-bootstrap";
import { Footer } from "../footer/footer";
import { NavBar } from "../header/nav";
import './about.css'


export default function About(){
    return(

        <div>
            <NavBar/>
           
            <h2 className="hhh">COVID-19 VACCINATION </h2>
            <hr></hr>
          
            
            <CardGroup >
            <div className="hh">
                <Card style={{borderColor:"white"}}>
                 
            <div className="lh">
                    <p>Name</p><p>URL</p><p>Owner</p><p>Commercial</p>
                <p>Registration</p>
                <p>Launched</p>
                <p>Current status</p>
                 </div></Card>
            </div>
                 
                
                <div className="aa">
                <Card style={{borderColor:"white"}}><div className="p"><p>COVID-19 WEBSITE </p>
                <p>www.localhost:3000</p><p>GOVERNAMENT OF INDIA</p>
                <p>No</p><p>Required</p><p>01/06/2022</p><p>Active</p>
                
            </div></Card></div>
            
                <Card style={{backgroundColor:"lightgrey"}}>
                    
                
                <div className="ss"><p>CoWIN (Covid Vaccine Intelligence Network) is an Indian government web portal for COVID-19 vaccination registration, owned and operated by India's Ministry of Health and Family Welfare. It displays booking slots of COVID-19 vaccine available in the nearby areas and can be booked on the website.</p>
               <p>Coronavirus disease (COVID-19) is an infectious disease caused by the SARS-CoV-2 virus.

Most people infected with the virus will experience mild to moderate respiratory illness and recover without requiring special treatment. However, some will become seriously ill and require medical attention. Older people and those with underlying medical conditions like cardiovascular disease, diabetes, chronic respiratory disease, or cancer are more likely to develop serious illness. Anyone can get sick with COVID-19 and become seriously ill or die at any age. 

The best way to prevent.</p>
                </div>
                </Card>  
               
               
        
           
                </CardGroup>
                <hr></hr>
                <h2 className="a">HISTORY</h2>
                <hr></hr>
                <p>On 16 January 2021, CoWIN started offering COVID-19 vaccination for Frontline Workers in the country.[3]

On 1 March 2021, the platform started offering vaccination to all residents over the age of 60, residents between the ages of 45 and 60 with one or more qualifying comorbidities, and any health care or frontline worker that did not receive a dose during phase 1.[4]

From 1 April 2021, eligibility was extended to all residents over the age of 45.[5] Registration for the next phase began on 28 April 2021 for 1 May 2021, extending eligibility to all residents over the age of 18.[6]

On 28 June 2021, it was announced that an open source version will be given to over 50 interested countries.[7]

On 21 October 2021, according to the CoWin portal, India crosses 1 billion doses.[8]

From January 3, 2022, eligibility was extended for the citizens above 15 years of age, for which registration started from January 1, 2022, on CoWIN. Currently only Covaxin vaccine is approved for 15-18 age group. [9]

From January 10, 2022, COVID booster dose drive has been started for frontline workers, 60+ people with comorbidities, healthcare workers and workers on election duty. Either they can visit the vaccination center or book the slot on CoWIN Platform. Booster (precaution dose) will only be given with same shots as prior, and there should be gap of nine to twelve months from 2nd shot. [10]

From March 16, 2022, vaccination started for children of 12-14 age group. Corbevax vaccine is approved for children.</p> <hr></hr>
<h2>REFERENCS</h2><hr></hr>
<li> "PM Narendra Modi To Launch CoWin App On January 16, Virtually Kickoff India's Vaccination Drive". Moneycontrol.</li><li>
 "Covid 19 Vaccine: Russian Sputnik V on CoWin app, check price and other details".</li> India Today. 18 May 2021.
 "World's largest vaccination programme begins in India on January 16".<li> The Hindu. 15 January 2021. Retrieved 16 January 2021.
 "Coronavirus Registration for next phase of vaccination on Co-WIN 2.0 portal to open on March 1".</li><li> The Hindu. 28 February 2021.
 "CoWin Upgrade, 50 lakh Daily Target: What to Expect As India Vaccinates Citizens Above 45".</li> www.news18.com. 3 April 2021. Retrieved 27 April 2021.
 "Around 1.33 Crore Apply For Covid Vaccination: 10 Points". NDTV.com. Retrieved 1 May 2021.
 Perappadan, Bindu Shajan (28 June 2021).<li> "CoWIN open-source version to be given to 50 nations". The Hindu.
 "100-crore mark! Here's how India celebrated Covid-19 vaccination milestone". Livemint. 21 October 2021. Archived from the original on 21 October 2021. Retrieved 22 October 2021.
 "15-17 age group to get Covaxin from January 3". The Hindu. 27 December 2021.</li>
 <li>"From vaccine for kids to third shots for healthcare workers and older adults: 3 key announcements about India's COVID vaccination drive". The Times of India. 26 December 2021. Retrieved 12 January 2022.</li>
 <hr></hr>
 <Footer/>
                </div>
               
       




        
    )
}