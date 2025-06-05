import { Alert, Button, Card, Col, Image, Row, Spinner } from "react-bootstrap";
import coverImage from "../assets/images/placeholderCover.png";
import avatar from "../assets/images/avatar.svg";
import linkSvg from "../assets/images/vite.svg";
import { FaCamera } from "react-icons/fa";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyExperience, getMyProfile } from "../redux/actions/index";
import InfoSections from "./InfoSections";
import Graphic from "../assets/images/graphic.png";
import SectionGeneric from "./SectionGeneric";
import ExperiencesSection from "./ExperiencesSection";
import EditProfileModal from "./EditProfileModal";
import SideBar from "./Sidebar";

const ProfileSection = () => {
  const dispatch = useDispatch();

  const [showEditmodal, setShowEditmodal] = useState(false);
  const { content: profileSection, error, loading } = useSelector((state) => state.profile);
  const { content: experienceList, error: experienceError, loading: experienceLoading } = useSelector((state) => state.experience);

  // Gestione immagine profilo
  const [imgSrc, setImgSrc] = useState(avatar);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  useEffect(() => {
    if (profileSection?._id) {
      dispatch(getMyExperience());
    }
  }, [profileSection?._id, dispatch]);

  useEffect(() => {
    if (profileSection?.image) {
      setImgSrc(profileSection.image);
    } else {
      setImgSrc(avatar);
    }
  }, [profileSection]);

  const handleError = () => {
    setImgSrc(avatar);
  };

  if (loading) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Caricamento profilo...</span>
      </Spinner>
    );
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  if (!profileSection) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Caricamento profilo...</span>
      </Spinner>
    );
  }

  return (
    <>
      <Row>
        <Col xs={12} md={7} lg={9}>
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
              <Image src={imgSrc} onError={handleError} className="profileImg" alt="Profilo" />
              <Row className="position-relative pt-5">
                <Row>
                  <Col>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>
                        {profileSection.name} {profileSection.surname}
                      </h2>
                      <Pencil size={20} onClick={() => setShowEditmodal(true)} style={{ cursor: "pointer" }} />
                    </div>

                    <h3>{profileSection.title}</h3>
                    <Row>
                      <Col xs={12} md={6}>
                        <p className="text-muted">{profileSection.area}</p>
                      </Col>
                      <Col xs={12} md={6}>
                        <p>{profileSection.email}</p>
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
                    <Button className="w-100 py-2 myButton" variant="primary">
                      Disponibile per
                    </Button>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <Button className="w-100 py-2 myButton" variant="outline-primary">
                      Aggiungi sezione del profilo
                    </Button>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <Button className="w-100 py-2 myButton" variant="outline-secondary">
                      Risorse
                    </Button>
                  </Col>
                  <Col sm={12} md={6} lg={3}>
                    <Button className="w-100 py-2 myButton" variant="outline-primary">
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

          <InfoSections details={profileSection.bio} />

          {/* Sezione Esperienze */}
          {experienceLoading ? (
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Caricamento esperienze...</span>
            </Spinner>
          ) : experienceError ? (
            <Alert variant="danger">{experienceError}</Alert>
          ) : experienceList && experienceList.length > 0 ? (
            <ExperiencesSection experiences={experienceList} />
          ) : (
            <Card className="my-2 py-3">
              <Card.Header className="bg-white border-0">
                <Row className="align-items-center">
                  <Col>
                    <h4>Esperienze</h4>
                  </Col>
                  <Col className="text-end">
                    <Button variant="light" className="border-0 bg-transparent">
                      <PlusLg className="me-3" size={25} />
                    </Button>
                    <Button variant="light" className="border-0 bg-transparent">
                      <Pencil size={25} />
                    </Button>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>Nessuna esperienza disponibile.</Card.Body>
            </Card>
          )}

          <SectionGeneric header="Formazione" title="Scuola/università" subtitle="durata" details="Votazione" image={Graphic} />
          <SectionGeneric header="Competenze" title="Disciplina" subtitle="Scuola/università" details="Altre informazioni" image={Graphic} />
          <EditProfileModal show={showEditmodal} handleClose={() => setShowEditmodal(false)} profileData={profileSection} />
        </Col>
        <Col xs={0} md={5} lg={3} className="d-none d-md-block">
          <SideBar />
        </Col>
      </Row>
    </>
  );
};

export default ProfileSection;
