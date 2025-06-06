import { useState, useEffect } from "react";
import { Container, Row, Col, Form, Card, Spinner, Button, ListGroup, Image } from "react-bootstrap";
import { FaBookmark, FaUsers, FaNewspaper, FaPlus, FaImage, FaVideo, FaRegCalendarAlt, FaEllipsisH } from "react-icons/fa";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setSearchQuery } from "../redux/actions";
import coverImage from "../assets/images/placeholderCover.png";
import { getMyProfile } from "../redux/actions";
import { Link } from "react-router-dom";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  //  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  //Fetch importata
  const dispatch = useDispatch();
  const error = useSelector((state) => state.mainReducer.searchResults.error);
  const jobs = useSelector((state) => state.mainReducer.searchResults.content);
  const searchQuery = useSelector((state) => state.mainReducer.searchQuery);
  const myProfile = useSelector((state) => state.myProfile.content);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
    dispatch(fetchJobs(query));
  };

  return (
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}
      <Row>
        <Col lg={3}>
          <Card className="mb-3">
            <Card.Img variant="top" src={coverImage} alt="Immagine di copertina" style={{ objectFit: "cover", height: "80px" }} />
            <Card.Body className="text-center position-relative pt-0">
              <Image
                src={myProfile.image}
                roundedCircle
                className="border border-white border-3"
                style={{ width: "80px", height: "80px", marginTop: "-40px", objectFit: "cover" }}
              />
              <Card.Title className="mb-0 mt-2">
                {myProfile.name} {myProfile.surname}
              </Card.Title>
              <Card.Text className="text-muted small">{myProfile.title}</Card.Text>
              <Card.Text className="text-muted small">{myProfile.area}</Card.Text>
              <Card.Text className="text-muted small">{myProfile.bio}</Card.Text>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Visualizzazioni del profilo</small>
                <strong>10</strong>
              </div>
              <Button variant="link" className="p-0 text-decoration-none">
                Visualizza tutte le analisi
              </Button>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Sblocca 4 volte più visite del profilo</small>
              </div>
              <Button variant="link" className="p-0 text-decoration-none text-warning">
                Riativa Premium
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0" as={Link} to={"/Favourites"}>
                  <FaBookmark className="me-2" />
                  <small>Elementi salvati</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaUsers className="me-2" />
                  <small>Gruppi</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaNewspaper className="me-2" />
                  <small>Newsletter</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaPlus className="me-2" />
                  <small>Eventi</small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search by work" />
            </Form>
          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {searchQuery && (
              <p className="mt-3 display-6">
                You searched: <em>{searchQuery}</em>
              </p>
            )}
            {jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
