import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, setContent, submitPost } from "../redux/actions/index";
import { Form, Button, Col, Modal, Row } from "react-bootstrap";
import { EmojiNeutral, PlusLg, Image, Textarea, Calendar, Clock } from "react-bootstrap-icons";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { isOpen, content, loading, error } = useSelector((state) => state.createPost);

  if (!isOpen) return null;

  //chiudo modale
  const handleClose = () => {
    if (!loading) dispatch(closeModal());
  };

  //invio post
  const handleSubmit = () => {
    dispatch(submitPost(content));
  };

  return (
    <Modal show={isOpen} onHide={handleClose} centered>
      <Modal.Header closeButton />
      <Modal.Body>
        <Form.Control
          as="textarea"
          rows={5}
          placeholder="Di cosa vorresti parlare?"
          value={content}
          onChange={(e) => dispatch(setContent(e.target.value))}
          className="border-0"
        />{" "}
        <Button variant="light" className="bg-transparent border-0" size="sm" title="Emoji">
          <EmojiNeutral />
        </Button>
        {error && <div className="text-danger mt-2">{error}</div>}
      </Modal.Body>

      <Modal.Footer className="justify-content-between">
        <Row className="w-100">
          <Col className="d-flex gap-3">
            <Button variant="light" className="bg-transparent border-0" size="sm" title="Image">
              <Image />
            </Button>
            <Button variant="light" className="bg-transparent border-0" size="sm" title="Calendar">
              <Calendar />
            </Button>
            <Button variant="light" className="bg-transparent border-0" size="sm" title="Textarea">
              <Textarea />
            </Button>
            <Button variant="light" className="bg-transparent border-0" size="sm" title="Add">
              <PlusLg />
            </Button>
          </Col>
          <Col className="text-end">
            <Button variant="light" className="bg-transparent border-0" size="sm" title="Add">
              <Clock />
            </Button>
            <Button variant="primary" className="rounded-pill" onClick={handleSubmit}>
              {loading ? "Invio..." : "Pubblica"}
            </Button>
          </Col>
        </Row>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatePost;
