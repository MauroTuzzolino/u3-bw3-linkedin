import { Navbar, Nav, Form, FormControl, Container, NavDropdown } from "react-bootstrap";
import { FaLinkedin, FaSearch, FaHome, FaUsers, FaUserCircle, FaBriefcase, FaComments, FaBell, FaTh, FaCaretDown } from "react-icons/fa";
import "./NavBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProfileByName } from "../redux/reducers/profileThunks";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      dispatch(searchProfileByName(searchQuery.trim()));
    }
  };

  return (
    <Navbar bg="white" expand="md" className="border border-bottom-secondary border-bottom-2">
      <Container className="d-flex align-items-center">
        {/* Logo */}
        <Navbar.Brand onClick={() => navigate("/")} style={{ cursor: "pointer" }} className="d-flex align-items-center">
          <FaLinkedin color="#0a66c2" size={45} />
        </Navbar.Brand>

        {/* Toggle */}
        <Navbar.Toggle aria-controls="navbar-content" />

        <Navbar.Collapse id="navbar-content">
          {/* Barra di ricerca */}
          <Form onSubmit={handleSubmit} className="d-flex justify-content-center justify-content-md-start my-2 my-lg-0 flex-grow-1" role="search">
            <div className="d-flex align-items-center border border-dark rounded-5 px-2 w-75">
              <FaSearch className="text-muted mx-2" />
              <FormControl
                type="search"
                placeholder="Cerca"
                className="border-0 shadow-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </Form>

          {/* Icone */}
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/home" className="d-flex flex-column align-items-center mx-2">
              <FaHome size={30} />
              <small className="d-block d-md-none d-lg-block">Home</small>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2">
              <FaUsers size={30} />
              <small className="d-block d-md-none d-lg-block">Rete</small>
            </Nav.Link>
            <Nav.Link as={Link} to="/jobs" className="d-flex flex-column align-items-center mx-2">
              <FaBriefcase size={30} />
              <small className="d-block d-md-none d-lg-block">Lavoro</small>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2">
              <FaComments size={30} />
              <small className="d-block d-md-none d-lg-block">Messaggistica</small>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2">
              <FaBell size={30} />
              <small className="d-block d-md-none d-lg-block">Notifiche</small>
            </Nav.Link>
            <NavDropdown
              title={
                <div className="d-flex flex-column align-items-center">
                  <FaUserCircle size={30} />
                  <div className="d-flex align-items-center">
                    <small className="d-block d-md-none d-lg-block">Tu</small>
                    <FaCaretDown className="ms-1" size={10} />
                  </div>
                </div>
              }
              id="profile-dropdown"
              align="end"
              style={{ zIndex: 10000 }}
            >
              <NavDropdown.Item as={Link} to="/me">
                Profilo
              </NavDropdown.Item>
              <NavDropdown.Item href="#">Impostazioni</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Esci</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Parte di destra*/}
          <Nav className="ms-auto text-center">
            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2">
              <FaTh size={30} />
              <small className="d-block d-md-none d-lg-block">Per le aziende</small>
            </Nav.Link>
            <Nav.Link href="#" className="d-flex flex-column align-items-center mx-2 text-warning text-decoration-underline">
              <small className="d-block d-md-none d-lg-block">Prova Premium per 0</small>
              <small className="d-block d-md-none d-lg-block">EUR</small>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
