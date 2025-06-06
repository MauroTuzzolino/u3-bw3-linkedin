import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.content);

  const isFavourited = favourites.some((job) => job.company_name === data.company_name);

  const toggleFavourite = () => {
    if (isFavourited) {
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: { company_name: data.company_name } });
    } else {
      dispatch({ type: "ADD_TO_FAVOURITES", payload: { company_name: data.company_name } });
    }
  };

  return (
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      {data.title && (
        <Col xs={6}>
          <a href={data.url} target="_blank" rel="noreferrer">
            {data.title}
          </a>
        </Col>
      )}
      <Col xs={3}>
        <Button variant="light" onClick={toggleFavourite}>
          {isFavourited ? <FaHeart color="red" /> : <FaRegHeart />}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
