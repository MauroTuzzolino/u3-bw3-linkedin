import { Row, Col, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../redux/actions/index";
import { useState } from "react";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  // Estraggo la lista dei preferiti dallo store
  const favourites = useSelector((state) => state.favourites.list);

  // Controllo se l'azienda è già tra i preferiti
  const isFavourite = favourites.includes(data.company_name);

  // Quando clicco il bottone per aggiungere ai preferiti
  const handleAddFavourite = () => {
    dispatch(addFavourite(data.company_name)); // aggiungo ai preferiti nello store
    setShowModal(true); // apro il modale
  };

  return (
    <>
      <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
        <Col xs={3}>
          <Link to={`/${data.company_name}`}>{data.company_name}</Link>
        </Col>
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
        <Col xs={3} className="text-end">
          {isFavourite ? (
            <span style={{ fontSize: "1.5rem", color: "#f9c74f" }}>⭐</span>
          ) : (
            <Button variant="outline-primary" onClick={handleAddFavourite}>
              + Preferito
            </Button>
          )}
        </Col>
      </Row>

      {/* Modale di conferma */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Aggiunto ai preferiti</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          L'azienda <strong>{data.company_name}</strong> è stata aggiunta ai preferiti! ⭐
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Job;
