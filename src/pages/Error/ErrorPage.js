import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import NotFoundImage from "../../images/error.png";
import { motion } from "framer-motion";
import "./ErrorPage.css"; 

function ErrorPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="error-page-container"
    >
      <Container className="mt-5 p-5">
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center text-white">
            <h1 className="mb-4">404 - Page Not Found</h1>
            <div className="mb-4">
              <Image src={NotFoundImage} alt="Not Found" fluid />
            </div>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div>
              <Link to="/" className="btn btn-primary">
                Go to Home Page
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default ErrorPage;
