import { Modal, Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";

const EditExperienceModal = ({ show, handleClose, experienceData, handleSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData({
      ...experienceData,
      startDate: experienceData?.startDate ? experienceData.startDate.substring(0, 10) : "",
      endDate: experienceData?.endDate ? experienceData.endDate.substring(0, 10) : ""
    });
  }, [experienceData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSave = () => {
    handleSave(formData);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Esperienza</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" name="role" value={formData.role || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" name="company" value={formData.company || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di inizio</Form.Label>
            <Form.Control type="date" name="startDate" value={formData.startDate || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data di fine</Form.Label>
            <Form.Control type="date" name="endDate" value={formData.endDate || ""} onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" rows={3} name="description" value={formData.description || ""} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={onSave}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditExperienceModal;
