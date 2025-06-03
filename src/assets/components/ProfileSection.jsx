import { Alert, Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import coverImage from "../images/placeholderCover.png";
import linkSvg from "../images/vite.svg";
import { Pen, Pencil } from "react-bootstrap-icons";

const ProfileSection = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Img variant="top" src={coverImage} className="coverImage" />
          <Card.Body>
            {/* //mettere immagini matita con abosolute */}
            <Row mt={2}>
              <Row>
                <Col>
                  <h2> Nome e Cognome</h2>
                  <h3>Titolo lavoro</h3>
                  <Row>
                    <Col xs={12} md={6}>
                      <p className="text-muted"> Residenza, luogo </p>
                    </Col>
                    <Col xs={12} md={6}>
                      <p> informazioni contatto</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  <div>
                    <div className="d-block mb-3">
                      <Image src={linkSvg} />
                      <h6 className="d-inline-block">AZIENDA</h6>
                    </div>
                    <div className="d-block">
                      <Image src={linkSvg} />
                      <h6 className="d-inline-block">AZIENDA</h6>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="d-flex justify-content-around w-50 mb-3">
                <Button className="rounded-pill " variant="primary">
                  Disponibile per
                </Button>
                <Button className="rounded-pill " variant="outline-primary">
                  Aggiungi sezionde del profilo
                </Button>
                <Button className="rounded-pill " variant="outline-primary">
                  Migliora profilo
                </Button>
                <Button className="rounded-pill" variant="outline-secondary">
                  Risorse
                </Button>
              </div>
              <Row>
                <Col>
                  <Alert variant="primary">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5>Disponibile a lavorare</h5>
                      <Pencil size={20} />
                    </div>
                    <p className="mb-0">Ruoli di </p>
                    <p className="mb-0">Mostra dettagli</p>
                  </Alert>
                </Col>
                <Col>
                  <Alert variant="light" dismissible>
                    <h5>Metti in risalto i tuoi servizi</h5>
                    <p className="mb-0">in un'apposita sezione del tuo profilo, così sarà più facile trovarti.</p>
                    <p className="mb-0">Inizia</p>
                  </Alert>
                </Col>
              </Row>
            </Row>
          </Card.Body>
        </Card>

        {/*   <Row>
          //row con immagini
          <Col xs={12}>
            <div>
              {" "}
              <Image src={coverImage} className="coverImage" rounded />
            </div>
          </Col>
        </Row>

        <Row>
          //altre info
          <Row>
            //nome, lavoro, residenza
            <Col>
              <p> Nome e Cognome</p>
            </Col>
            <Col></Col>
          </Row>
          <Row>//bottoni disponibile per</Row>
          <Row>//metti in risalto</Row>
        </Row> */}
      </Container>
    </>
  );
};

export default ProfileSection;
