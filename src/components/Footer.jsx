import { Container, Row, Col, Nav, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="py-4">
      <Container>
        <Row className="mb-4">
          {/* Colonna 1 */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#informazioni" className="text-secondary small">
                Informazioni
              </Nav.Link>
              <Nav.Link href="#community" className="text-secondary small">
                Informativa sulla community professionale
              </Nav.Link>
              <Nav.Link href="#privacy" className="text-secondary small">
                Privacy e condizioni
              </Nav.Link>
              <Nav.Link href="#sales" className="text-secondary small">
                Sales Solutions
              </Nav.Link>
              <Nav.Link href="#sicurezza" className="text-secondary small">
                Centro sicurezza
              </Nav.Link>
            </Nav>
          </Col>

          {/* Colonna 2 */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#accessibilita" className="text-secondary small">
                Accessibilità
              </Nav.Link>
              <Nav.Link href="#carriera" className="text-secondary small">
                Carriera
              </Nav.Link>
              <Nav.Link href="#annunci" className="text-secondary small">
                Opzioni per gli annunci pubblicitari
              </Nav.Link>
              <Nav.Link href="#mobile" className="text-secondary small">
                Mobile
              </Nav.Link>
            </Nav>
          </Col>

          {/* Colonna 3 */}
          <Col md={2}>
            <Nav className="flex-column">
              <Nav.Link href="#talent" className="text-secondary small">
                Talent Solutions
              </Nav.Link>
              <Nav.Link href="#marketing" className="text-secondary small">
                Soluzioni di marketing
              </Nav.Link>
              <Nav.Link href="#pubblicita" className="text-secondary small">
                Pubblicità
              </Nav.Link>
              <Nav.Link href="#piccoleimprese" className="text-secondary small">
                Piccole imprese
              </Nav.Link>
            </Nav>
          </Col>

          {/* Colonna 4 */}
          <Col md={6}>
            <Row>
              <Col>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-question-circle-fill me-2" style={{ fontSize: "1.5rem" }}></i>
                  <div>
                    <strong className="d-block">Domande?</strong>
                    <a href="#assistenza" className="text-secondary small">
                      Visita il nostro Centro assistenza.
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-gear-fill me-2" style={{ fontSize: "1.5rem" }}></i>
                  <div>
                    <strong className="d-block">Gestisci il tuo account e la tua privacy</strong>
                    <a href="#impostazioni" className="text-secondary small">
                      Vai alle impostazioni
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-shield-shaded me-2" style={{ fontSize: "1.5rem" }}></i>
                  <div>
                    <strong className="d-block">Trasparenza sui contenuti consigliati</strong>
                    <a href="#contenuti" className="text-secondary small">
                      Scopri di più sui contenuti consigliati
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="d-flex flex-column align-items-end">
                <div className="mb-3">
                  <label htmlFor="language-select" className="d-block text-secondary small mb-1">
                    Seleziona lingua
                  </label>
                  <Dropdown>
                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className="w-100">
                      Italiano (Italiano)
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Español</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Français</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center text-md-start">
            <p className="text-secondary small">LinkedIn Corporation © 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
