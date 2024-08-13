import { Swiper, SwiperSlide } from "swiper/react";
import AnimationTitles from "../components/functions/AnimationTitles";
import { motion } from "framer-motion";
import { Container } from "react-bootstrap";
import { useFirebase } from "../context/Firebase";
import { useEffect, useState } from "react";

function Developers() {
  const firebase = useFirebase();
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      const users = await firebase.getUsers();
      setTeamMembers(users);
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="join">
      <div className="container-fluid">
        <AnimationTitles title="Highlights" className="title mx-auto" />
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-center align-items-center"
            grabCursor={true}
            slidesPerView={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 4,
              },
            }}
          >
        
              <SwiperSlide
                className="py-4 px-3 align-items-center flex-column"
              >
                <img
                   src={require("../images/fashion.jpeg")}
                  alt="Dj"
                  style={{ width: '100%', height: '200px', maxHeight: '200px' }}
                  className="img-fluid rounded-circle"
                />
                <AnimationTitles
                  title="Fashion Show"
                  className="text-white mb-4 mt-3 h4"
                />
                <p className="gray-50 text-center ">"Unveil Your Style: Where Creativity Meets the Runway!"</p>
              </SwiperSlide>

              <SwiperSlide
                className="py-4 px-3 align-items-center flex-column"
              >
                <img
                   src={require("../images/rapbattle.jpg")}
                  alt="Dj"
                  style={{ width: '100%', height: '200px', maxHeight: '200px' }}
                  className="img-fluid rounded-circle"
                />
                <AnimationTitles
                  title="Rap Battle"
                  className="text-white mb-4 mt-3 h4"
                />
                <p className="gray-50 text-center ">"Rhyme or Rumble: Spit Fire on the Mic!"</p>
              </SwiperSlide>

              <SwiperSlide
                className="py-4 px-3 align-items-center flex-column"
              >
                <img
                   src={require("../images/dj.jpg")}
                  alt="Dj"
                  style={{ width: '100%', height: '200px', maxHeight: '200px' }}
                  className="img-fluid rounded-circle"
                />
                <AnimationTitles
                  title="DJ Night"
                  className="text-white mb-4 mt-3 h4"
                />
                <p className="gray-50 text-center ">"Drop the Beat, Feel the Heat: Let's Party All Night!"</p>
              </SwiperSlide>

              <SwiperSlide
                className="py-4 px-3 align-items-center flex-column"
              >
                <img
                   src={require("../images/star.jpg")}
                  alt="Dj"
                  style={{ width: '100%', height: '200px', maxHeight: '200px' }}
                  className="img-fluid rounded-circle"
                />
                <AnimationTitles
                  title="Star Night"
                  className="text-white mb-4 mt-3 h4"
                />
                <p className="gray-50 text-center ">"Star-Studded Spectacular: Lights, Camera, Celebrities!"</p>
              </SwiperSlide>
   
          </Swiper>
        </motion.div>
        
      </div>
      <div className="container-fluid">
        <AnimationTitles title="Our Team" className="title mx-auto" />
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            className="mySwiper overflow-none justify-content-start"
            grabCursor={true}
            slidesPerView={5}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              596: {
                slidesPerView: 3,
              },
              998: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
          >
            {teamMembers.map((member) => (
              <SwiperSlide
                key={member.uid}
                className="py-4 px-3 align-items-center flex-column"
              >
                <img
                  src={member.photoURL}
                  alt={member.name}
                  style={{ width: '100%', height: '200px', maxHeight: '200px' }}
                  className="img-fluid rounded-circle"
                />
                <AnimationTitles
                  title={member.name}
                  className="text-white mb-4 mt-3 h4"
                />
                <p className="gray-50">{member.position}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        
      </div>
    </div>
  );
}

export default Developers;
