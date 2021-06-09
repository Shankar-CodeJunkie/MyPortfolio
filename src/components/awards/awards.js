import React from 'react';
import bravo from './../../images/award1-2.jpg'
import ee from './../../images/ibmee-2.jpg'
import otaaimg from './../../images/otaa-2.jpg'
import managerchoice from './../../images/managerchoiceaward-2.jpg'
import { Button, Row, Col } from "react-bootstrap"

function Awards() {
    return (

        <div className="Container">
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={ee}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>September, 2019</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Excellence and Eminence Award</h5>
                        <p>
                            Congratulations Shankar !!! on this well deserved award. Your work on the DSR prototype thus reducing request processing cycles is indeed commendable. This exhibits your keen sensitivity towards Adoptor experience and bettering it all the time. Keep it alive !! :-)
                </p>
                    </Col>

                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={ee}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>May, 2018</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Lab Service Award</h5>
                        <p>
                            SIVAGNANAM KUMARAVEL has recognized you with Lab Service Award!  Congratulations Shankar !!! on this well deserved cash award of 1000 USD. </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={ee}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>May, 2018</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Excellence and Eminence Award</h5>
                        <p>
                            SIVAGNANAM KUMARAVEL has recognized you with an eCard and awarded you 100 BluePoints through the Manager's Choice Award for demonstrating
                            the passion, dedication and flexibility you have shown in resolving client issues in the recent engagements you had supported (from Jan'18).
                </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={managerchoice}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>November, 2017</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Manager Choice Award</h5>
                        <p>
                            PRIYANKA SHARMA has recognized you with an eCard and awarded you 138 BluePoints through the Manager's Choice Award for demonstrating
                            passion for client success! Appreciate all the efforts you put in automating tasks which helps customers in various ways. Looking forward to working with you in 2018
                </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={managerchoice}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>November, 2017</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Manager Choice Award</h5>
                        <p>
                            SOUMITRA LIMAYE has recognized you with an eCard and awarded you 200 BluePoints through the Manager's Choice Award for demonstrating
                            passion to try new things is exciting and that is definitely what i would like you to keep going. Keep the client success flag flying high always
                </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={managerchoice}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>November, 2017</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">Manager Choice Award</h5>
                        <p>
                            JITENDRA KUMAR has recognized you with an eCard and awarded you 150 BluePoints through the Manager's Choice Award for demonstrating
                            Thanks for all to effort and handwork toward client success !!
                </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">

                <Row>
                    <Col xs={12} md={2}>
                        <img src={otaaimg}>

                        </img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>June, 2016</h5>
                    </Col>
                    <Col xs={12} md={8}>
                        <h5 color="blue">OTAA Award</h5>
                        <p>
                        Congratulations on your 1st CV OTAA! you regularly go above and beyond the scope of your work to ensure delighted customers. Your out of box thinking has resulted in multiple innovations on the cloud through serviceability solutions which has helped our customers. Keep it going! 
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="award-new">
                <Row>
                    <Col xs={12} md={2}>
                        <img src={bravo}></img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>2009</h5>
                    </Col>
                    <Col xs={12} md={8}>
                    <h5 color="blue">BRAVO Award</h5>
                    <p>
                This is in recognition of your significant contributions to the project , where you helped customer to restore their data from one of their decommissioned server that had several and serious limitations in their requirement. You did a lot of research and testing to make their requirement possible and you have shared a white paper in IBM Lotus Wiki for outside technical community , so that, a similar requirement in the future can be answered confidently
                </p>
                    </Col>
                </Row>

            </div>
            <div className="award-new">
            <Row>
                    <Col xs={12} md={2}>
                        <img src={bravo}></img>
                    </Col>
                    <Col xs={12} md={2}>
                        <h5>2008</h5>
                    </Col>
                    <Col xs={12} md={8}>
                    <h5 color="blue">BRAVO Award</h5>
                    <p>
                    This is in recognition of your significant contributions to the team and show personal interest for the Client Success and Innovation
                    </p>
                    </Col>
                </Row>

            </div>
       
        </div>
    )
}

export default Awards;
