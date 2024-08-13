// Import bootstrap react components
import { Button, Card, Container } from "react-bootstrap";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import CountDown from "../components/functions/CountDown";
// import framer motion
import { motion } from "framer-motion";
import AnimationTitles from "../components/functions/AnimationTitles";
import { useEffect, useState } from "react";
import { useFirebase } from "../context/Firebase";

function Properties() {
  const firebase = useFirebase();
  const [events, setEvents] = useState([]);
  const [selectedDay, setSelectedDay] = useState("All");

  const dateMap = {
    "Day 1": "2024-03-13T00:00:00",
    "Day 2": "2024-03-14T00:00:00",
    "Day 3": "2024-03-15T00:00:00",
  };

  function getTimeRemaining(day) {
    const eventDate = new Date(dateMap[day]);
    const currentDate = new Date();
    const timeDifference = eventDate - currentDate;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  // Active on select a tab
  function active(e, day) {
    setSelectedDay(day);
    let act = document.querySelectorAll(".active");
    act[0].classList.remove("active");
    e.target.classList.add("active");
  }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsData = await firebase.getEvents();
        setEvents(eventsData);
        console.log(events);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchEvents();
  }, []);

  // const events = [
  //   {
  //     title: "Happy birthday",
  //     description: "Join us in celebrating a special day filled with joy and laughter.",
  //     agency : "Awwaz",
  //     day: "Day 1",
  //     date: "2024-03-01",
  //     time: "18:00",
  //     location: "Virtual Event",
  //     link: "https://www.instagram.com",
  //     eventId: 122343434,
  //     photoURL: "https://i0.wp.com/utkarsh.adgitmdelhi.ac.in/wp-content/uploads/2023/03/carnivore.png?ssl=1",
  //   },
  //   {
  //     title: "Mr and Mrs Utkarsh",
  //     description: "Join us in celebrating a special day filled with joy and laughter.",
  //     day: "Day 2",
  //     agency : "Awwaz",
  //     location: "Virtual Event",
  //     link: "https://www.instagram.com",
  //     eventId: 1212,
  //     photoURL: "https://i0.wp.com/utkarsh.adgitmdelhi.ac.in/wp-content/uploads/2023/03/carnivore.png?ssl=1",
  //   },

  // ];

  const filteredEvents =
    selectedDay === "All"
      ? events
      : events.filter((event) => event.day === selectedDay);

  // Like button of properties
  function like(e) {
    return e.target.classList.value === "fa-regular fa-heart like"
      ? (e.target.classList.value = "fa-solid fa-heart like text-danger")
      : (e.target.classList.value = "fa-regular fa-heart like");
  }

  const { hours, minutes, seconds } = getTimeRemaining("Day 1");

  return (
    // Start properties
    <div className="properties">
      <Container>
        <AnimationTitles className="title mx-auto" title="Main Events" />
        {/* Start tabs */}
        <div className="tabs d-flex justify-content-center justify-content-sm-center align-items-center flex-nowrap w-lg-50 mx-auto">
          <Swiper
            className="mySwiper overflow-none"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={6}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 6,
              },
            }}
          >
            <SwiperSlide>
              <Button
                className={`ms-0 bg-black-100 border-0 ${
                  selectedDay === "All" ? "active" : ""
                }`}
                onClick={(e) => active(e, "All")}
              >
                All
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`ms-0 bg-black-100 border-0 ${
                  selectedDay === "Day 1" ? "active" : ""
                }`}
                onClick={(e) => active(e, "Day 1")}
              >
                Day 1
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`ms-0 bg-black-100 border-0 ${
                  selectedDay === "Day 2" ? "active" : ""
                }`}
                onClick={(e) => active(e, "Day 2")}
              >
                Day 2
              </Button>
            </SwiperSlide>
            <SwiperSlide>
              <Button
                className={`ms-0 bg-black-100 border-0 ${
                  selectedDay === "Day 3" ? "active" : ""
                }`}
                onClick={(e) => active(e, "Day 3")}
              >
                Day 3
              </Button>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* End tabs */}
        {/* Start cards */}
        <motion.div
          initial={{ x: -80 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={15}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 4,
              },
              1198: {
                slidesPerView: 5,
              },
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper mt-4"
          >
            {filteredEvents.length === 0 ? (
              <div className="text-center mt-4">
                <AnimationTitles
              title="Coming Soon!"
              style={{
                color: "orange",
                fontWeight: "bold",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.5)",
              }}
            />
              </div>
            ) : (
              filteredEvents.map((event, index) => (
                <SwiperSlide key={event.eventId}>
                  <Card className="bg-black-100 rounded">
                    <Card.Body className="p-2">
                      <div className="rounded overflow-hidden position-relative">
                        <Card.Img
                          variant="top"
                          alt="img"
                          src={event.photoURL}
                        />
                        <i
                          className="fa-regular fa-heart like"
                          onClick={like}
                        ></i>
                      </div>
                      <h5 className="mt-2 text-white fw-normal">
                        {event.title}
                      </h5>
                      {/* <p className="gray-90 ellipsis-120">{event.description}</p> */}
                      <div className="d-flex">
                        <div className="me-3">
                          <CountDown h={hours} m={minutes} s={seconds} />
                          <span className="gray-90">Remaining Time</span>
                        </div>
                        <div>
                          <h6 className="text-white">{event.location}</h6>
                          <span className="gray-90">Location</span>
                        </div>
                      </div>

                      <button
                        className="btn btn-primary m-4 align-self-end"
                        onClick={() => window.open(event.link, "_blank")}
                      >
                        Register Now
                      </button>
                    </Card.Body>
                  </Card>
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </motion.div>
        {/* End cards */}
      </Container>
    </div>
    // End properties
  );
}

export default Properties;
