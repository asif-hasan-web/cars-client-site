import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import useContexts from '../../hooks/useContexts'

const Header = () => {
    const {authInfo} = useContexts();
    const {user,logOut} = authInfo;
    const {displayName,email, photoURL} =user;
    const active = {
        color: "#ff136f",
        borderBottom: "2px solid #ff136f",
      };
      const navStyle = {
        textDecoration: "none",
        margin: "0 8px",
        color: "white",
        paddingTop: "8px",
        fontSize: "17px"
      };
    return (
        <>
        <Navbar bg="dark" expand="lg">
            <Container>
            <Navbar.Brand className="text-white"  as={Link} to="/home">CARS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link  className="text-white" as={NavLink} to="/home">Home</Nav.Link>
                    <Nav.Link  className="text-white" as={NavLink} to="/shop">Shop</Nav.Link>
                    <Nav.Link className="text-white"  as={NavLink} to="/dashboard">Dashboard</Nav.Link>

                    {displayName ? (
                <>
                  <div className="text-center">
                        <button onClick={logOut} className="btn btn-primary">
                          Log Out
                        </button>
                      </div>
                  
                </>
              ) : (
                <>
                  <NavLink
                    className="hoverStyle"
                    style={navStyle}
                    activeStyle={active}
                    to="/login"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    className="hoverStyle"
                    style={navStyle}
                    activeStyle={active}
                    to="/signup"
                  >
                    Sign up
                  </NavLink>
                </>
              )}
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Header
