import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <Container className="mt-4">
            <Row>
              <Col xs={12} md={7} lg={9}>
                <ProfileSection />
              </Col>
              <Col xs={0} md={5} lg={3}></Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
