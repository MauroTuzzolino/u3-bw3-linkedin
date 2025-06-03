import { Alert, Button, Card, Col, Image, Row } from "react-bootstrap";
import coverImage from "../assets/images/placeholderCover.png";
import avatar from "../assets/images/avatar.svg";
import linkSvg from "../assets/images/vite.svg";
import { FaCamera } from "react-icons/fa";
import { Pen, Pencil } from "react-bootstrap-icons";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getMyProfile } from "../redux/actions";

const ProfileSection = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMyProfile());
  }, []);
  return (
    <Card>
      <div
        style={{
          position: "absolute",
          zIndex: "1000",
          top: "1rem",
          right: "1rem",
          backgroundColor: "#e0e0e0",
          borderRadius: "50%",
          padding: "12px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FaCamera size={17} fill="primary" />
      </div>
      <Card.Img variant="top" src={coverImage} className="coverImage position-relative" />
      <Card.Body>
        <Image src={avatar} className="profileImg" alt="Profilo" />
        {/* //mettere immagini matita con abosolute */}
        <Row className="position-relative pt-5">
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
          <Row className="d-flex justify-content-around w-100 mb-3 gy-2">
            <Col sm={12} md={6} lg={3}>
              <Button className="w-100 py-2 myButton  " variant="primary">
                Disponibile per
              </Button>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Button className="w-100 py-2 myButton " variant="outline-primary">
                Aggiungi sezione del profilo
              </Button>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Button className="w-100 py-2 myButton " variant="outline-secondary">
                Risorse
              </Button>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Button className="w-100 py-2 myButton " variant="outline-primary">
                Migliora profilo
              </Button>
            </Col>
          </Row>

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
  );
};

export default ProfileSection;
