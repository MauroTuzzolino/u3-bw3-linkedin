import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <Container className="my-4">
            <Routes>
              {/* Route per la Home/Feed con le due colonne (profilo + feed) */}
              <Route path="/home" element={<HomePage />} />
              {/* Le tue route esistenti per ProfileSection */}
              <Route path="/" element={<ProfileSection />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
