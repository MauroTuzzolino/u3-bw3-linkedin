import { useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";

// Importo i due hook fondamentali di Redux per React:
// - useDispatch mi serve per "spedire" azioni allo store Redux
// - useSelector mi serve per "leggere" dati dallo store
import { useDispatch, useSelector } from "react-redux";

// Importo il thunk asincrono che ho creato per gestire la fetch
import { fetchSearchResults } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  // Creo il dispatcher per inviare azioni al Redux store
  const dispatch = useDispatch();

  // Uso useSelector per accedere ai dati dallo slice 'search'
  // Estraggo risultati, loading e error dal Redux store
  const { results, loading, error } = useSelector((state) => state.search);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /*Ho rimosso la fetch manuale ed ora mi affido completamente a Redux per gestirla.
    In questo punto invoco l'action creator asincrono "fetchSearchResults"
    che si occupa di fare la richiesta, dispatchare lo stato di loading,
    e infine i risultati o eventuali errori.*/
    dispatch(fetchSearchResults(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Inserisci la chiave di ricerca e premi Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading && <Spinner animation="border" />}
          {error && <Alert variant="danger">{error}</Alert>}
          {results.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
