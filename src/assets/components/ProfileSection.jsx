import { Card, Col, Container, Image, Row } from "react-bootstrap";
import coverImage from "../images/placeholderCover.png";
const ProfileSection = () => {
  return (
    <>
      <Container>
        <Card>
          <Card.Img variant="top" src={coverImage} className="coverImage" />
          <Card.Body>
            {" "}
            {/* //mettere immagini matita con abosolute */}
            <Row mt={2}>
              <Row>
                <Col>
                  <h2> Nome e Cognome</h2>
                  <h3>Titolo lavoro</h3>
                  <Row>
                    <Col xs={12} md={6}>
                      {" "}
                      <p className="text-muted"> Residenza, luogo </p>
                    </Col>
                    <Col xs={12} md={6}>
                      {" "}
                      <p> informazioni contatto</p>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  {" "}
                  <Row>
                    <Col xs={12}>
                      {" "}
                      <Image></Image> <h5 className="d-inline-block"> Azienda</h5>
                    </Col>
                    <Col xs={12}>
                      <Image></Image> <h5 className="d-inline-block"> Azienda</h5>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>//bottoni disponibile per</Row>
              <Row>//metti in risalto</Row>
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
