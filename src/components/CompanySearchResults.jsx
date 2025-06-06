import { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyJobs } from "../redux/actions/index";

const CompanySearchResults = () => {
  // Estraggo il parametro `company` dalla URL
  const params = useParams();

  // Creo il dispatcher per inviare azioni al Redux store
  const dispatch = useDispatch();

  // Leggo i dati dallo stato globale Redux
  const { results, loading, error } = useSelector((state) => state.search);

  // useEffect che parte al montaggio del componente o quando cambia `params.company`
  useEffect(() => {
    // Dispatch della thunk action che si occupa della fetch
    dispatch(fetchCompanyJobs(params.company));
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
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

export default CompanySearchResults;
