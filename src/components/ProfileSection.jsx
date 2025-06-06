import { Alert, Button, Card, Col, Image, Row, Spinner } from "react-bootstrap";
import coverImage from "../assets/images/placeholderCover.png";
import avatar from "../assets/images/avatar.svg";
import linkSvg from "../assets/images/industry.png";
import { FaCamera } from "react-icons/fa";
import { Pencil, PlusLg } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperienceByUserId, getMyExperience, getMyProfile, getUserProfile } from "../redux/actions/index";
import InfoSections from "./InfoSections";
import Graphic from "../assets/images/graphic.png";
import SectionGeneric from "./SectionGeneric";
import ExperiencesSection from "./ExperiencesSection";
import EditProfileModal from "./EditProfileModal";
import SideBar from "./Sidebar";
import { useParams, useLocation } from "react-router-dom";
import EditProfileImageModal from "./EditProfileImageModal";

const ProfileSection = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const location = useLocation();

  const isMyProfile = location.pathname === "/me";

  const [showEditmodal, setShowEditmodal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);

  const myProfile = useSelector((state) => state.myProfile);
  const otherProfile = useSelector((state) => state.otherProfile);

  const myExperienceState = useSelector((state) => state.experience);
  const otherExperienceState = useSelector((state) => state.otherExperience);

  const experiences = isMyProfile ? myExperienceState.content : otherExperienceState.content;

  // Debug per vedere cosa c'è negli stati
  console.log("isMyProfile:", isMyProfile);
  console.log("userId:", userId);
  console.log("otherExperienceState:", otherExperienceState);

  const experienceList = isMyProfile ? myExperienceState?.content : otherExperienceState?.content;
  const experienceLoading = isMyProfile ? myExperienceState?.loading : otherExperienceState?.loading;
  const experienceError = isMyProfile ? myExperienceState?.error : otherExperienceState?.error;

  const profileSection = isMyProfile ? myProfile?.content : otherProfile?.content;
  const loading = isMyProfile ? myProfile?.loading : otherProfile?.loading;
  const error = isMyProfile ? myProfile?.error : otherProfile?.error;
  const [imgSrc, setImgSrc] = useState(avatar);

  // Carica il profilo
  useEffect(() => {
    if (isMyProfile) {
      dispatch(getMyProfile());
    } else if (userId) {
      dispatch(getUserProfile(userId));
    }
  }, [dispatch, isMyProfile, userId]);

  // Carica le esperienze
  useEffect(() => {
    if (isMyProfile && profileSection?._id) {
      dispatch(getMyExperience());
    } else if (!isMyProfile && userId) {
      // Per altri profili, assicurati che l'action usi correttamente userId
      console.log("Caricando esperienze per userId:", userId);
      dispatch(getExperienceByUserId(userId));
    }
  }, [dispatch, isMyProfile, profileSection?._id, userId]);

  // Gestisci l'immagine del profilo
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
            {isMyProfile && (
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
                  cursor: "pointer",
                }}
              >
                <FaCamera size={17} fill="primary" />
              </div>
            )}
            <Card.Img variant="top" src={coverImage} className="coverImage position-relative" />
            <Card.Body>
              <Image
                src={imgSrc}
                onError={handleError}
                className="profileImg"
                alt="Profile Image"
                onClick={isMyProfile ? () => setShowImageModal(true) : undefined}
                style={{ cursor: isMyProfile ? "pointer" : "default" }}
              />
              <Row className="position-relative pt-5">
                <Row>
                  <Col>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2>
                        {profileSection.name} {profileSection.surname}
                      </h2>
                      {isMyProfile && <Pencil size={20} onClick={() => setShowEditmodal(true)} style={{ cursor: "pointer" }} />}
                    </div>

                    <h3 className="fs-5">{profileSection.title}</h3>
                    <Row>
                      <Col xs={12}>
                        <p className="text-muted">{profileSection.area}</p>
                      </Col>
                      <Col xs={12}>
                        <p>{profileSection.email}</p>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="d-flex justify-content-center align-items-center">
                    <div>
                      {experienceLoading ? (
                        <Spinner animation="border" size="sm" />
                      ) : (
                        experiences?.slice(0, 2).map((exp, index) => (
                          <Row key={exp._id} className="d-block mb-3">
                            <Col x2={4}>
                              <Image
                                src={exp.image || linkSvg}
                                className="industryImg"
                                alt={exp.company}
                                onError={(e) => {
                                  e.target.src = linkSvg;
                                }}
                              />
                            </Col>

                            <Col xs={8}>
                              {" "}
                              <h6 className="d-inline-block">{exp.company}</h6>
                            </Col>
                          </Row>
                        ))
                      )}

                      {/* Se non ci sono esperienze, mostra placeholder */}
                      {!experienceLoading && (!experiences || experiences.length === 0) && (
                        <>
                          <div className="d-block mb-3">
                            <Image src={linkSvg} className="industryImg" />
                            <h6 className="d-inline-block">Nessuna azienda</h6>
                          </div>
                        </>
                      )}
                    </div>
                  </Col>
                </Row>

                {isMyProfile && (
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
                )}

                {isMyProfile && (
                  <Row>
                    <Col>
                      <Alert variant="primary">
                        <div className="d-flex justify-content-between align-items-center">
                          <h5>Disponibile a lavorare</h5>
                          <Pencil size={20} onClick={() => setShowEditmodal(true)} style={{ cursor: "pointer" }} />
                        </div>
                        <p className="mb-0">Ruoli di {profileSection.title}</p>
                        <a className="mb-0">Mostra dettagli</a>
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
                )}
              </Row>
            </Card.Body>
          </Card>

          <InfoSections details={profileSection.bio} isMyProfile={isMyProfile} />

          {/* Sezione Esperienze */}
          {experienceLoading ? (
            <Spinner animation="border" role="status" variant="info">
              <span className="visually-hidden">Caricamento esperienze...</span>
            </Spinner>
          ) : experienceError ? (
            <Alert variant="danger">{experienceError}</Alert>
          ) : experienceList && experienceList.length > 0 ? (
            <ExperiencesSection experiences={experienceList} isMyProfile={isMyProfile} userId={userId} />
          ) : (
            <Card className="my-2 py-3">
              <Card.Header className="bg-white border-0">
                <Row className="align-items-center">
                  <Col className="text-end">
                    {isMyProfile && (
                      <>
                        <Button variant="light" className="border-0 bg-transparent">
                          <PlusLg className="me-3" size={25} />
                        </Button>
                        <Button variant="light" className="border-0 bg-transparent">
                          <Pencil size={25} onClick={() => setShowEditmodal(true)} style={{ cursor: "pointer" }} />
                        </Button>
                      </>
                    )}
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>Nessuna esperienza disponibile.</Card.Body>
            </Card>
          )}

          <SectionGeneric header="Formazione" title="Scuola/università" subtitle="durata" details="Votazione" image={Graphic} isMyProfile={isMyProfile} />
          <SectionGeneric
            header="Competenze"
            title="Disciplina"
            subtitle="Scuola/università"
            details="Altre informazioni"
            image={Graphic}
            isMyProfile={isMyProfile}
          />

          {isMyProfile && (
            <>
              <EditProfileModal show={showEditmodal} handleClose={() => setShowEditmodal(false)} profileData={profileSection} />
              <EditProfileImageModal show={showImageModal} handleClose={() => setShowImageModal(false)} />
            </>
          )}
        </Col>
        <Col xs={0} md={5} lg={3} className="d-none d-md-block">
          <SideBar />
        </Col>
      </Row>
    </>
  );
};

export default ProfileSection;
