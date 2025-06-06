import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../redux/reducers/jobsReducer";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBookmark } from "react-icons/fa";

const JobList = () => {
  const dispatch = useDispatch();
  const { jobs: data, loading, error } = useSelector((state) => state.jobsReducer);
  const favourites = useSelector((state) => state.favouritesReducer.content);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const toggleFavourite = (job) => {
    const isFavourited = favourites.some((fav) => fav.company_name === job.company_name);
    if (isFavourited) {
      dispatch({ type: "REMOVE_FROM_FAVOURITES", payload: job });
    } else {
      dispatch({ type: "ADD_TO_FAVOURITES", payload: job });
    }
  };

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div className="bg-white mt-3 p-3 rounded">
        {data.slice(0, 10).map((job) => {
          const isFavourited = favourites.some((fav) => fav.company_name === job.company_name);

          return (
            <Row key={job._id} className="mx-0 mt-3 p-3" style={{ borderBottom: "1px solid #00000033" }}>
              <Col xs={3}>
                <Link to={`/${job.company_name}`} className="text-decoration-none">
                  {job.company_name}
                </Link>
              </Col>
              {job.title && (
                <Col xs={6}>
                  <a href={job.url} target="_blank" rel="noreferrer" className="text-decoration-none">
                    {job.title}
                  </a>
                </Col>
              )}
              <Col xs={3} className="text-end">
                <Button variant="transparent" onClick={() => toggleFavourite(job)}>
                  {isFavourited ? <FaBookmark color="red" /> : <FaBookmark />}
                </Button>
              </Col>
            </Row>
          );
        })}
      </div>{" "}
    </>
  );
};

export default JobList;
