import { BrowserRouter , Routes, Route  } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Footer from "./pages/Footer";
import Loading from "./pages/Header";
import Register from "./pages/Register";
import ErrorPage from "./pages/Error/ErrorPage";
import Login from "./pages/Login";
import CreateEvent from "./pages/CreateEvent";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Design from "./components/Design";

function App() {
  return (
    <>
      <BrowserRouter>
      <Design className="position-absolute top-0 left-0 " />

      <ToastContainer/>
        <NavBar />
        <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createEvent" element={<CreateEvent />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
