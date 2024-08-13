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
import { Link, useNavigate } from "react-router-dom";


import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (firebase.user !== null) {
      navigate("/");
    }
  }, [firebase.user,firebase.loading, navigate]);

  const initialFormData = {
    fullName: "",
    email: "",
    position: "",
    priority: 0,
    profileImage: null,
    password: "",
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
      toast.error('Please fill in all the fields before submitting!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      // console.log("Form Data:", formData);
      handleUserSignup();
    }
  };

  const handleUserSignup = async () => {
    try {
      const user = await firebase.createUserWithEmail(
        formData.email,
        formData.password,
        formData.position,
        formData.priority,
        formData.fullName,
        formData.profileImage
      );

      if (user) {
        // console.log("User signed up successfully:", user);
        if (user != null) {
          // navigate("/");
          toast.info('User created please check mail and verify!', {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      } else {
        alert("Signup Failed");
        console.error("Signup failed");
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
                  <h3 className="mb-4 text-uppercase fw-bold">
                    User Registration{" "}
                    <Link to="/login" style={{ fontSize: "14px", wordWrap : "nowrap" }}>
                      Login
                    </Link>
                  </h3>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Full Name"
                        size="lg"
                        id="fullName"
                        type="text"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Email"
                        size="lg"
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Position"
                        size="lg"
                        id="position"
                        type="text"
                        value={formData.position}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Priority"
                        size="lg"
                        id="priority"
                        type="number"
                        value={formData.priority}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Password"
                        size="lg"
                        id="password"
                        type="password"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow>
                    <MDBCol md="12">
                      <MDBInput
                        label="Profile Image"
                        size="lg"
                        id="profileImage"
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

export default Register;
