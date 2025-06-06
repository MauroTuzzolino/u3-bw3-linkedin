import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Card, Col, Image, Row } from "react-bootstrap";
import { PlusLg, Pencil, Trash } from "react-bootstrap-icons";
import EditExperienceModal from "./EditExperienceModal";
import { updateExperience, createExperience, deleteExperience } from "../redux/actions";

const ExperiencesSection = ({ userId, isMyProfile }) => {
  const dispatch = useDispatch();

  // Seleziona le esperienze corrette in base a isMyProfile
  const experiences = useSelector((state) => (isMyProfile ? state.experience.content : state.otherExperience.content));

  const [showModal, setShowModal] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleEditClick = (experience) => {
    setSelectedExperience(experience);
    setShowModal(true);
  };

  const handleAddClick = () => {
    console.log("HandleAddClick chiamato");
    setSelectedExperience(null);
    setShowModal(true);
  };

  const handleSave = (updatedExperience, imageFile) => {
    console.log("HandleSave chiamato con:", {
      updatedExperience,
      imageFile,
      selectedExperience,
      userId,
    });

    if (selectedExperience?._id) {
      console.log("Aggiornamento esperienza esistente");
      dispatch(updateExperience(userId, selectedExperience._id, updatedExperience, imageFile));
    } else {
      console.log("Creazione nuova esperienza");
      console.log("userId:", userId);
      console.log("updatedExperience:", updatedExperience);
      dispatch(createExperience(userId, updatedExperience));
    }
    setShowModal(false);
  };

  const handleDelete = (expId) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questa esperienza?");
    if (confirmDelete) {
      dispatch(deleteExperience(userId, expId));
    }
  };

  return (
    <>
      <Card className="my-2 py-3">
        <Card.Header className="bg-white border-0">
          <Row className="align-items-center">
            <Col>
              <h4>Esperienze</h4>
            </Col>
            <Col className="text-end">
              {isMyProfile && (
                <Button variant="light" className="border-0 bg-transparent" onClick={handleAddClick}>
                  <PlusLg className="me-3" size={25} />
                </Button>
              )}
            </Col>
          </Row>
        </Card.Header>

        <Card.Body>
          {experiences && experiences.length > 0 ? (
            experiences.map((exp) => (
              <Row key={exp._id} className="mb-3 border-bottom">
                <Col sm={1} className="d-none d-md-block">
                  <Image src={exp.image} className="companyImgExperience" />
                </Col>
                <Col>
                  <h5>
                    {exp.role}
                    {isMyProfile && (
                      <>
                        <Pencil size={20} className="ms-2" style={{ cursor: "pointer" }} onClick={() => handleEditClick(exp)} />
                        <Trash size={20} className="ms-2 text-danger" style={{ cursor: "pointer" }} onClick={() => handleDelete(exp._id)} />
                      </>
                    )}
                  </h5>
                  <h6>{exp.company}</h6>
                  <p>
                    {exp.startDate?.substring(0, 10)} - {exp.endDate?.substring(0, 10)}
                  </p>
                </Col>
              </Row>
            ))
          ) : (
            <p className="text-muted">Nessuna esperienza disponibile.</p>
          )}
        </Card.Body>
      </Card>

      <EditExperienceModal show={showModal} handleClose={() => setShowModal(false)} experienceData={selectedExperience} handleSave={handleSave} />
    </>
  );
};

export default ExperiencesSection;
