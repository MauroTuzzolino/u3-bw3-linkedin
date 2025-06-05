import { Modal, Button, Form, Image } from "react-bootstrap";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMyImgProfile } from "../redux/actions/index";

const EditProfileImageModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.myProfile.content);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(profileData?.image || null);
  const fileInputRef = useRef(null);

  // Gestisce la selezione del file
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Crea preview dell'immagine
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Apre il dialog per selezionare il file
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  // Salva l'immagine
  const handleSave = () => {
    if (selectedFile && profileData?._id) {
      dispatch(updateMyImgProfile(selectedFile, profileData._id));
      handleClose();
    }
  };

  // Gestisce errori immagine
  const handleError = () => {
    setPreview(null);
  };

  // Reset quando si chiude il modal
  const handleModalClose = () => {
    setSelectedFile(null);
    setPreview(profileData?.image || null);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carica la nuova immagine del profilo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* Input file nascosto */}
        <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileSelect} style={{ display: "none" }} />

        {/* Preview dell'immagine */}
        <div className="text-center">
          {preview ? (
            <Image
              src={preview}
              onError={handleError}
              className="profileImgEdit"
              alt="Profile Image"
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

        {/* Mostra il nome del file selezionato */}
        {selectedFile && (
          <p className="text-center mt-3">
            File selezionato: <strong>{selectedFile.name}</strong>
          </p>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Annulla
        </Button>

        <Button variant="primary" onClick={handleUploadClick}>
          Carica
        </Button>

        <Button
          variant="primary"
          onClick={handleSave}
          disabled={!selectedFile} // Disabilita se non c'è file
        >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileImageModal;
