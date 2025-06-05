import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <Container className="my-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Route per la Home/Feed con le due colonne (profilo + feed) */}
              <Route path="/home" element={<HomePage />} />
              {/* Le tue route esistenti per ProfileSection */}
              <Route path="/me" element={<ProfileSection />} />
              <Route path="/other/:userId" element={<ProfileSection />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
