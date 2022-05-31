import { Card, CardGroup } from "react-bootstrap";
import '../assets/video.mp4'
import { Footer } from "../footer/footer";
import { NavBar } from "../header/nav";
export default function Blog(){
    return(<div>
        <NavBar/>
        <h2>Coronavirus disease:</h2>
        <hr></hr>
        <h3>Treatments</h3>
        <p>SELF-CARE</p>
        <div>
        <li>Isolate yourself in a well ventilated room.</li>
        <li>Use a triple layer medical mask, discard mask after 8 hours of use or earlier if they become wet or visibly soiled. In the event of a caregiver entering the room, both caregiver and patient may consider using N 95 mask.</li>
<li>Mask should be discarded only after disinfecting it with 1% Sodium Hypochlorite.
Take rest and drink a lot of fluids to maintain adequate hydration.</li>
<li>Follow respiratory etiquettes at all times.</li>
<li>Frequent hand washing with soap and water for at least 40 seconds or clean with alcohol-based sanitizer.</li>
<li>Don’t share personal items with other people in the household.</li>
<li>Ensure cleaning of surfaces in the room that are touched often (tabletops, doorknobs, handles, etc.) with 1% hypochlorite solution.</li>
<li>Monitor temperature daily</li>
<li>Monitor oxygen saturation with a pulse oximeter daily.</li>
<li>Connect with the treating physician promptly if any deterioration of symptoms is noticed.</li>
       </div> 
       <Footer/>   
       </div>
    )
}