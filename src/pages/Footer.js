import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const twitterLink = document.getElementById("twitter-link");
    const insatgramLink = document.getElementById("instagram-link");
    const facebookLink = document.getElementById("facebook-link");

    if (twitterLink) {
      twitterLink.addEventListener("click", () => {
        window.open("https://twitter.com/yash82206", "_blank");
      });
    }
    if (insatgramLink) {
      insatgramLink.addEventListener("click", () => {
        window.open("https://www.instagram.com/utkarsh.adgips/", "_blank");
      });
    }
    if (facebookLink) {
      facebookLink.addEventListener("click", () => {
        window.open("https://www.facebook.com/UtkarshADGITM/", "_blank");
      });
    }
  
  }, [])
  
  return (
    <footer>
      <Container>
        <div className="d-flex justify-content-between flex-column flex-md-row flex-wrap pt-5 pb-4">
          <motion.div
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={require("../images/logo/logo4.png")}
              alt="logo"
              className="mb-3  "
              style={
                {height: "50px", width:"120px", }
              }
            />
            <p className="gray-100">
              Please contact us if you have any specific <br /> idea or request.
            </p>
            <Link className="link-primary link-underline-opacity-0" to={""}>
              contact@adgitmdelhi.ac.in
            </Link>
          </motion.div>
          <span className="d-block d-md-none"></span>
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="d-flex"
          >
            
            <div>
              <h6 className="gray-100 text-uppercase mb-2 fw-normal">
                Socials
              </h6>
              <ul className="p-0">

                <div className="d-flex align-items-center " >
                  <li id="twittwe-link">Twitter</li>
                  <BsTwitterX style={{
                    color: 'white',
                    paddingLeft: '3'
                  }}/>
                </div>

                <div className="d-flex align-items-center" >
                  <li id="instagram-link">Instagram</li>
                  <FaInstagram style={{
                    color: 'white',
                    paddingLeft: '3'
                  }}  />
                </div>

                <div className="d-flex align-items-center" >
                  <li id="facebook-link">Facebook</li>
                  <FaFacebookF style={{
                    color: 'white',
                    paddingLeft: '3'
                  }}/>
                </div>
              </ul>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="d-flex justify-content-between flex-column flex-md-row flex-wrap gray-100 pt-3"
        >
          <p>© 2024 Utkarsh. All rights reserved</p>
          <p>
            Created with{" "}
            <Link className="link-primary link-underline-opacity-0" to={""}>
              ❤️
            </Link>
          </p>
          
        </motion.div>
      </Container>
    </footer>
  );
}

export default Footer;
