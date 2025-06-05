import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateMyProfile } from "../redux/actions/index";

const EditProfileImageModal = ({ show, handleClose, profileData }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ ...profileData });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    dispatch(updateMyProfile(formData));
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Immagine del profilo</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {/* <Image onError={handleError} className="profileImgEdit" alt="Profile Image" /> */}
        <p> ciaoooo</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileImageModal;
