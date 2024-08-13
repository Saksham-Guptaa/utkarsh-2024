import React, { useEffect, useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import { useFirebase } from "../context/Firebase";
import {  useNavigate } from "react-router-dom";


import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateEvent() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.user === null || (firebase.user && !firebase.user.admin)) {
      navigate("/error");
    }
  }, [firebase.user, firebase.loading, navigate]);

  const initialFormData = {
    title: "",
    description: "",
    duration: "",
    link: "",
    photoURL: null,
    location: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value, type, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = () => {
    if (
      Object.values(formData).some(
        (value) => value === null || value === "" || value === 0
      )
    ) {
      alert("Please fill in all the fields before submitting");
    } else {
      console.log("Form Data:", formData);
      handleUserSignup();
    }
  };

  const handleUserSignup = async () => {
    try {
      const { title, description, duration, link, photoURL , location} = formData;

      const event = await firebase.createEvent(title, description, link, photoURL, duration,location);
      if(event){
        toast.success('Event Created Successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          });
          handleReset()
        // alert("Event created successfully")
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  return (
    <MDBContainer fluid className="bg-dark">
      <MDBRow className="d-flex justify-content-center align-items-center vh-75">
        <MDBCol md="8">
          <MDBCard className="my-4">
            <MDBRow className="g-0">
              <MDBCol md="6" className="d-none d-md-block">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  className="rounded-start"
                  fluid
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="text-black d-flex flex-column justify-content-center">
                  <h3 className="mb-4 text-uppercase fw-bold">Create Event </h3>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Title"
                        size="lg"
                        id="title"
                        type="text"
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="description"
                        size="lg"
                        id="description"
                        type="text"
                        value={formData.description}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Location"
                        size="lg"
                        id="location"
                        type="text"
                        value={formData.location}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Day of Fest"
                        size="lg"
                        id="duration"
                        type="number"
                        placeholder="Choose from 1 2 3"
                        value={formData.duration}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Link"
                        size="lg"
                        id="link"
                        type="link"
                        value={formData.link}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Event Image"
                        size="lg"
                        id="photoURL"
                        type="file"
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <div className="d-flex justify-content-end pt-3">
                    <MDBBtn color="light" size="lg" onClick={handleReset}>
                      Reset
                    </MDBBtn>
                    <MDBBtn
                      className="ms-2"
                      color="warning"
                      size="lg"
                      onClick={handleSubmit}
                    >
                      Submit
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CreateEvent;
