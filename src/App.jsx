import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <Container className="my-4">
            <Row>
              <Col xs={12} md={7} lg={9}>
                <Routes>
                  <Route path="/myProfile/:userId" element={<ProfileSection userType="me" />} />
                  <Route path="/user/:userId" element={<ProfileSection userType="otherUser" />} />
                </Routes>
              </Col>
              <Col xs={0} md={5} lg={3}>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
