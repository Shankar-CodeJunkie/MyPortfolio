import logo from './logo.svg';
import './App.css';
//import { Button } from 'carbon-components-react';
import TutorialHeader from './components/header/';
import Leftsidebar from './components/sidemenu/sidemenu';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import About from './components/about/about'
import Experience from './components/experience/experience'
import Skills from './components/skills/skills';
import Awards from './components/awards/awards';
import { TableOfContents } from "@carbon/ibmdotcom-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Row, Col} from "react-bootstrap"
import Container from 'react-bootstrap/Container'
import { Column } from 'carbon-components-react';
import BootstrapHeader from './components/header/bootstrapheader'

function App() {
  return (
     /*<div className="parent-container">
         <aside className="site-sidebar">
             <Container>
                 <Row sm={1} md={1} lg={1}>
                    <div className="site-sidebar-inner">
                    <div class="person-content">
          <h1 class="person-title p-name">Shankar Venkatachalam</h1>
          <h2 class="person-subtitle p-job-title p-note">Full-stack Software Engineer</h2>
        </div>
                    </div>
                 </Row>
             </Container>

         </aside>
     </div>*/
     <div>
      <BootstrapHeader />
      <Container>
        <Router>
          <Switch>

            <Route exact path="/about" component={About} />

            <Route exact path="/experience" component={Experience} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/awards" component={Awards}>

            </Route>
            <Route exact path="/education">

            </Route>
            <Route exact path="/contact">

            </Route>
          </Switch>
        </Router>

      </Container>

     </div>
     

    
  );
}

export default App;
