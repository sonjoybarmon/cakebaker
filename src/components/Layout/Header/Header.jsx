import React from "react";
import { Col, Container, Nav, Navbar, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.webp";
import {
  BsDiscord,
  BsTelegram,
  BsTwitter,
  BsFillPencilFill,
} from "react-icons/bs";
import classes from "./Header.module.scss";
const Header = () => {
  let activeStyle = {
    color: "#fdbe43",
    textDecoration: "none",
  };

  let navStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  return (
    <Navbar bg="transparent" expand="lg" className={classes.nav_wrapper}>
      <Container>
        <Navbar.Brand
          href="/"
          style={{ color: "#fff" }}
          className={classes.nav_logo}
        >
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={classes.nav_content}>
          <Row style={{ width: "100%" }}>
            <Col md={8} className={classes.left_site}>
              <Nav className={classes.nav_list}>
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>Home</a>
                </NavLink>
                <NavLink
                  to="/roadmap"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>Roadmap</a>
                </NavLink>
                <NavLink
                  to="/market"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>Market</a>
                </NavLink>
                <NavLink
                  to="/my-nfts"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>My NFTs</a>
                </NavLink>
                <NavLink
                  to="/my-rewards"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>My Rewards</a>
                </NavLink>
                <NavLink
                  to="/create-villains"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <a>Create Villains</a>
                </NavLink>
                <NavLink
                  to="/as"
                  style={({ isActive }) => (isActive ? activeStyle : navStyle)}
                  className={classes.nav_list_item}
                >
                  <Button>🧪 Mint Serum</Button>
                </NavLink>
              </Nav>
            </Col>
            <Col md={4} className={classes.right_site}>
              <Nav className={classes.nav_right_list}>
                <NavLink to="/" className={classes.nav_right_list_item}>
                  <BsDiscord
                    style={({ isActive }) =>
                      isActive ? activeStyle : navStyle
                    }
                    className={classes.nav_right_list_icons}
                  />
                </NavLink>
                <NavLink to="/" className={classes.nav_right_list_item}>
                  <BsTelegram
                    style={({ isActive }) =>
                      isActive ? activeStyle : navStyle
                    }
                    className={classes.nav_right_list_icons}
                  />
                </NavLink>
                <NavLink to="/" className={classes.nav_right_list_item}>
                  <BsTwitter
                    style={({ isActive }) =>
                      isActive ? activeStyle : navStyle
                    }
                    className={classes.nav_right_list_icons}
                  />
                </NavLink>
                <Button className={classes.right_site_button}>
                  Switch Network
                </Button>
              </Nav>
            </Col>
          </Row>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Container>
    // <Row>
    //   <Col md="8">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
    //     autem.
    //   </Col>
    //   <Col md={4}>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
    //     autem.
    //   </Col>
    // </Row>
    // </Container>
  );
};

export default Header;
