import { Button, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";

function AboutUs() {
  return (
    <div className="about">
      <Container className="d-flex justify-content-between flex-wrap flex-md-nowrap">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimationTitles title="What is UTKARSH 2024?" className="title" />
          <p className="gray-50 mb-5">
          Utkarsh isn't just a fest, it's a constellation of memories etched in silver for 25 years. It's the pulsating heart of our college, where dreams find their stage and aspirations take flight.
          From the echoing laughter of quiz nights to the thunderous applause in the auditorium, Utkarsh has woven a tapestry of moments that shimmer with shared joy.
          </p>
          {/* <Button variant="primary ms-0">Read More</Button> */}
        </motion.div>
        <motion.div
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="d-flex flex-column"
        >
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/DSC_1548.jpg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/IMG_3102.jpg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
          <div className="d-flex">
            <div>
              <img
                src={require("..//images/IMG_3714.jpg")}
                className="p-0 me-2 img"
                alt="img"
              />
            </div>
            <div>
              <img
                src={require("..//images/IMG_6793.jpg")}
                className="p-0 img"
                alt="img"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}

export default AboutUs;
