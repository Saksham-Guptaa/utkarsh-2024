import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import logo from "../../images/logo/logo4.png";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";

function NavBar() {
  const navigate = useNavigate();
  const firebase = useFirebase();

  const handleLogout = async () => {
    await firebase.logout();
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand href="" className="me-lg-5">
          <img className="logo" src={logo} alt="logo" style={
                {height: "50px", width:"120px", }
              } />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Link className="link" to="/">
              Home
            </Link>
          </Nav>
          <Nav className="d-lg-none">
            {firebase.user === null ? (
              <>
                <Link to="/register">
                  <Button variant="primary" className="btn-primary col-12">
                    Register Now
                  </Button>
                </Link>
                <Link to="/login">
                  <Button variant="primary" className="btn-primary mt-2 col-12">
                    Login
                  </Button>
                </Link>
              </>
            ) : (
              <div>
                <Button
                  onClick={handleLogout}
                  variant="primary"
                  className="btn-primary col-12 mb-2"
                >
                  Logout
                </Button>
                {firebase.user.admin === true && (
                  <Button
                    onClick={() => navigate("/createevent")}
                    variant="primary"
                    className="btn-primary col-12"
                  >
                    Create Event
                  </Button>
                )}
              </div>
            )}
          </Nav>
          {/* Desktop view buttons (hidden in mobile view) */}

          <Nav className="d-none d-lg-block">
            {/* Add any desktop view buttons here if needed */}
            <Nav className="d-flex">
              {firebase.user === null ? (
                <>
                  <Link to="/register">
                    <Button variant="primary" className="btn-primary me-2">
                      Register Now
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="primary" className="btn-primary">
                      Login
                    </Button>
                  </Link>
                </>
              ) : (
                <div className="d-flex">
                  <Button
                    onClick={handleLogout}
                    variant="primary"
                    className="btn-primary me-2"
                  >
                    Logout
                  </Button>
                  {firebase.user.admin === true && (
                    <Button
                      onClick={() => navigate("/createevent")}
                      variant="primary"
                      className="btn-primary"
                    >
                      Create Event
                    </Button>
                  )}
                </div>
              )}
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
