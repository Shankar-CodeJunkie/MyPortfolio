import React from 'react';
import {
    HeaderContainer,
    SideNav,
    SideNavHeader,
    SideNavItems,
    SideNavLink,
    SideNavMenu,
    SideNavMenuItem,
    HeaderMenuItem,
    HeaderSideNavItems,
    HeaderMenu,
  } from "carbon-components-react/lib/components/UIShell";


class Leftsidebar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data : null
        };
        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        alert('damn')
        console.log('yes been clicked');
    }

    render(){
        return(
            <SideNav
      isFixedNav={true}
      expanded={true}
      isChildOfHeader={true}
      aria-label="Side navigation">
      <SideNavItems>
        <SideNavMenu title="Shankar" isSideNavExpanded={true} isActive={true} defaultExpanded={true}>
          <SideNavMenuItem href="/about" >About</SideNavMenuItem>
          <SideNavMenuItem  href="/experience">Experience</SideNavMenuItem>
          <SideNavMenuItem href="/skills">Skills</SideNavMenuItem>
          <SideNavMenuItem href="/awards">Awards</SideNavMenuItem>
          <SideNavMenuItem href="/contact">Contact</SideNavMenuItem>
          
        </SideNavMenu>
       
      </SideNavItems>
    </SideNav>
        )
    }
}

export default Leftsidebar;