import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, Button, Alert } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { removeFromFavourites } from "../redux/actions";

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouritesReducer.content);
  const navigate = useNavigate();

  const handleRemoveFromFavourites = (companyName) => {
    dispatch(removeFromFavourites(companyName));

    /*({
       type: "REMOVE_FROM_FAVOURITES",
      payload: { company_name: companyName }, 
    });*/
  };

  const alertClosed = () => {
    navigate("/jobs");
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h2 className="my-4 display-5">Favourites</h2>
          {favourites.length === 0 ? (
            <Alert variant="warning" dismissible onClose={alertClosed}>
              No favourite company selected
            </Alert>
          ) : (
            <ListGroup>
              {favourites.map((job, index) => (
                <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                  <Link to={`/${job.company_name}`} className="text-decoration-none">
                    <strong>{job.company_name}</strong>
                  </Link>
                  <Button variant="outline-danger" size="sm" onClick={() => handleRemoveFromFavourites(job.company_name)}>
                    <FaTrash />
                  </Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
