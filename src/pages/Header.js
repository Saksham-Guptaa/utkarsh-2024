import { Card, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CountDown from "../components/functions/CountDown";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import AboutUs from "./AboutUs";
import Properties from "./Properties";
import Developers from "./Developers";
import { useEffect } from "react";
import { useFirebase } from "../context/Firebase";

import "react-toastify/dist/ReactToastify.css";
import Design from "../components/Design";

function Loading() {
  const firebase = useFirebase();

  useEffect(() => {
    firebase.getUser();
  }, []);

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  return (
    <>

      <div className="position-relative">
        <div className="loading position-relative">
          <Container className="d-flex justify-content-between align-items-center gap-md-5 flex-column flex-md-row mt-3 mt-xl-4 overflow-hidden position-relative">
            <motion.div
              initial={{ x: -400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <AnimationTitles
                title="UTKARSH 2024"
                style={{
                  color: "#ffff",
                 
                  textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
                  fontFamily: "Rubik Glitch Pop",
                  fontWeight: 400,
                  
                }}
              />
              <p className="gray-90 mt-3 fs-5">
                Celebrating 25 years of excillence
              </p>
              {/* <Button className="m-0 my-3 px-5 py-2 fs-5 fw-bold">Explore</Button> */}
              <div
                style={{ color: "white" }}
                className="d-none d-md-flex justify-content-between align-items-center my-4"
              >
                <div>
                  <h5 className="fw-bold fs-1">70+</h5>
                  <span className="gray-100">events</span>
                </div>
                <div>
                  <h5 className="fw-bold fs-1">15k+</h5>
                  <span className="gray-100">footfall</span>
                </div>
                <div>
                  <h5 className="fw-bold fs-1">15+</h5>
                  <span className="gray-100">performances</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 400 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-100 my-5"
            >
              <div className="cards">
                <Card className="bg-black-100 rounded">
                  <Card.Body className="p-2">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/college.jpg")}
                      />
                      <i
                        className="fa-regular fa-heart like"
                        onClick={like}
                      ></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">ADGIPS</h5>
                    <p className="gray-90">A Campus of BBD Group</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <h6 className="text-white">60+</h6>
                        <span className="gray-90">Companies</span>
                      </div>
                      <div>
                        <h6 className="text-white">25 years</h6>
                        <span className="gray-90">of excillence</span>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
                <Card className="bg-black-100">
                  <Card.Body className="p-2">
                    <div className="rounded overflow-hidden position-relative">
                      <Card.Img
                        variant="top"
                        alt="img"
                        src={require("../images/properties/logo2024.jpg")}
                      />
                      <i
                        className="fa-regular fa-heart like"
                        onClick={like}
                      ></i>
                    </div>
                    <h5 className="mt-2 text-white fw-normal">UTKARSH 2024</h5>
                    <p className="gray-90">Techno Cultural Fest</p>
                    <div className="d-flex">
                      <div className="me-3">
                        <CountDown h={144} m={16} s={11} />
                        <span className="gray-90">Remaining Time</span>
                      </div>
                      {/* <div>
                    <h6 className="text-white">17.31 ETH</h6>
                    <span className="gray-90">Current Bid</span>
                  </div> */}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ color: "white" }}
              className="d-md-none d-flex justify-content-between align-items-center my-4 features"
            >
              <div>
                <h5 className="fw-bold fs-1">70+</h5>
                <span className="gray-100">events</span>
              </div>
              <div>
                <h5 className="fw-bold fs-1">12K+</h5>
                <span className="gray-100">footfall</span>
              </div>
              <div>
                <h5 className="fw-bold fs-1">15+</h5>
                <span className="gray-100">performances</span>
              </div>
            </motion.div>
          </Container>
        </div>
        <AboutUs id="about-us" />
        <Properties />
        <Developers />
      </div>
    </>
  );
}

export default Loading;
