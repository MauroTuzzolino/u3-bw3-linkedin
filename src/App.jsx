import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Job from "./components/Job";
import CompanySearchResults from "./components/CompanySearchResults";
import Favourites from "./components/Favourites";

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
              <Route path="/me" element={<ProfileSection />} />
              <Route path="/other/:userId" element={<ProfileSection />} />
              <Route path="/work" element={<Job />} />
              <Route path="/:company" element={<CompanySearchResults />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
