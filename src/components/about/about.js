//import { Row } from 'carbon-components-react';
import {Row, Col} from 'react-bootstrap';
import React from 'react';
import gif from './../../images/drink_coffee-resize.gif'

function About() {
    return (
       <div className="Container">
           <Row>
               <Col md={12} xs={12}>
               <div className="item3">
            <p font-style="Georgia">
            <div className="name">I am Shankar,  </div>
            and I'm a full stack developer|programmer.  I started my professional career as a System Administrator. However, I started to learn coding,  after seeing some monetaneous tasks
            been carried out manually. The team members seen that task as a burden and also were doing those tasks with no interest. 
            I decided to automate those tasks. However, while doing so, I met with many hurdles. The challenges that I see, and the learnings I took to overcome those hurdles 
            made me to fall in love with Programming. It is the feeling of creating something. 
            </p>
            <br></br>
            
        </div>
               </Col>
           </Row>
           <Row>
               <Col md={12} xs={12}>
               <p font-style="Georgia" font-color="black">
                <span>
                People who had worked with me, would knew that I am always look to find ways to automate some or other things. I run some crazy ideas with my mentors and 
                try to find ways for innovation and improvisation in  the work , environment and at the end, I see that I am improvising myself as a better programmer. 
                What ever the skills I possess now were learnt from my mentors, peers, and at online. I am very much sure, that I need to learn a lot more
                than what I learnt so far. 
                </span>
            </p>
               </Col>
           </Row>
           <Row >
               <Col md={12} xs={12} className="imggif">
                   <div className="imggif">
                   <img src={gif} className="imggif"></img>

                   </div>
                   
               </Col>
           </Row>
       </div>
    )
}

export default About;