import { Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const Job = ({ data }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouritesReducer.content);

  const isFavourited = favourites.some((job) => job.company_name === data.company_name);

  const toggleFavourite = () => {
    if (isFavourited) {
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: { company_name: data.company_name } });
    } else {
      dispatch({ type: "ADD_TO_FAVOURITES", payload: { company_name: data.company_name } });
    }
  };

  return (
    <>
      <Row className="mx-0 mt-3 p-3" style={{ borderBottom: "1px solid #00000033" }}>
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
        <Col xs={3} className="text-end">
          <Button variant="transparent" onClick={toggleFavourite}>
            {isFavourited ? <FaBookmark color="red" /> : <FaBookmark />}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Job;
