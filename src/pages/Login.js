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

function Login() {
  const firebase = useFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.user !== null) {
      navigate("/");
    }
  }, [firebase.user, firebase.loading, navigate]);

  const initialFormData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { id, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = () => {
    if (
      Object.values(formData).some(
        (value) => value === null || value === "" || value === 0
      )
    ) {
      toast.error("Please fill in all the fields before submitting", {
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
      const user = await firebase.login(formData.email, formData.password);
      if (user !== null) {
        navigate("/");
        toast.success("Login successfully", {
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
        toast.error("Something went wrong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error("Error during login:", error.message);
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
                    User Login{" "}
                    <Link
                      to="/register"
                      style={{ fontSize: "14px", wordWrap: "nowrap" }}
                    >
                      Register
                    </Link>
                  </h3>

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
                        label="Password"
                        size="lg"
                        id="password"
                        type="password"
                        value={formData.password}
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

export default Login;
