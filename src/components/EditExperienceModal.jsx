import { Modal, Button, Form, Image } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";

const EditExperienceModal = ({ show, handleClose, experienceData, handleSave }) => {
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    setFormData({
      ...experienceData,
      startDate: experienceData?.startDate ? experienceData.startDate.substring(0, 10) : "",
      endDate: experienceData?.endDate ? experienceData.endDate.substring(0, 10) : "",
    });
    setPreview(experienceData?.image || null);
  }, [experienceData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSave = () => {
    handleSave(formData, selectedFile);
    handleClose();
  };

  const handleError = () => {
    setPreview(null);
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

        <h5>Carica Immagine</h5>
        <Button variant="outline-primary" onClick={() => fileInputRef.current?.click()} className="mb-3">
          Scegli immagine
        </Button>
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} style={{ display: "none" }} />

        <div className="text-center">
          {preview ? (
            <Image
              src={preview}
              onError={handleError}
              className="profileImgEdit"
              alt="Experience Image"
              style={{ maxWidth: "300px", maxHeight: "300px" }}
              fluid
              rounded
            />
          ) : (
            <div
              style={{
                width: "300px",
                height: "300px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                borderRadius: "8px",
              }}
            >
              <p>Nessuna immagine selezionata</p>
            </div>
          )}
        </div>

        {selectedFile && (
          <p className="text-center mt-3">
            File selezionato: <strong>{selectedFile.name}</strong>
          </p>
        )}
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
