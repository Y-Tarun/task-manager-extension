import React from 'react';
import { Navbar,Nav,Container } from 'react-bootstrap';
import SideMenuBar from './SideMenuBar';

function TopNavBar() {
    return (       
    <Navbar  variant="dark" className='top-navbar'>
    <Container>
    <SideMenuBar/>
    
    {/* <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav> */}
    </Container>
    
  </Navbar>
        
    )
}

export default TopNavBar




