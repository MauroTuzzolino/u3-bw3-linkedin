import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditPostModal = ({ show, handleClose, postText, setPostText, handleSave }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formPostText">
            <Form.Label>Testo del Post</Form.Label>
            <Form.Control as="textarea" rows={3} value={postText} onChange={(e) => setPostText(e.target.value)} />
          </Form.Group>
        </Form>
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

export default EditPostModal;
