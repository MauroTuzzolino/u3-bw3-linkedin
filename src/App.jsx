import "./App.css";
import ProfileSection from "./components/ProfileSection";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";
import InfoSections from "./components/InfoSections";
import Graphic from "./assets/images/graphic.png";

function App() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-content">
          <NavBar />
          <Container className="my-4">
            <Row>
              <Col xs={12} md={7} lg={9}>
                <ProfileSection />
                <InfoSections header="Informazioni" title="Nome Cognome" subtitle="Dettagli Personali" details="Lorem ipsum" image={Graphic} />
                <InfoSections header="Esperienza" title="Mansione" subtitle="Tipo di lavoro" details="durata" image={Graphic} />
                <InfoSections header="Formazione" title="Scuola/università" subtitle="durata" details="Votazione" image={Graphic} />
                <InfoSections header="Competenze" title="Disciplina" subtitle="Scuola/università" details="Altre informazioni" image={Graphic} />
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
