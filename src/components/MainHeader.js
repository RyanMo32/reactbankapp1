import React, { Component } from 'react';
import {Navbar, Nav, Container, Tooltip} from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

export default class MainHeader extends Component {
  render() {
    return (
      <div>
          
          <Navbar  collapseOnSelect expand="lg" bg="dark"  variant="dark">
  <Container>
  <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Back to bank home page.</Tooltip>}>
  <Navbar.Brand as={Link} to={"/home"}>React Bank</Navbar.Brand>
  </OverlayTrigger>              
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav   className="me-auto">
    <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Account balances</Tooltip>}>
      <Nav.Link  as={Link} to={"/AllData"}>Account</Nav.Link>
      </OverlayTrigger>              
      <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Make a deposit to your account.</Tooltip>}>
      <Nav.Link  as={Link} to={"/Deposit"}>Deposit</Nav.Link>
      </OverlayTrigger>              
      <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Withdraw money from your account.</Tooltip>}>
      <Nav.Link  as={Link} to={"/Withdraw"}>Withdraw</Nav.Link>
      </OverlayTrigger>              
    </Nav>
    <Nav>
    <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Create a new account.</Tooltip>}>
      <Nav.Link as={Link} to={"/create"}>Create Account     </Nav.Link>
      </OverlayTrigger>              
      <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip>Log in to your account.</Tooltip>}>
      <Nav.Link as={Link} to={"/login"}>Log In</Nav.Link>
      </OverlayTrigger>              
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>






      </div>
    )
  }
}
