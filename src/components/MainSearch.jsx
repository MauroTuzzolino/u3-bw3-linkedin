import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs, setSearchQuery } from "../redux/actions";

import NavSearch from "./NavSearch";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([]);

  //  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  //Fetch importata
  const dispatch = useDispatch();
  const error = useSelector((state) => state.mainReducer.searchResults.error);
  const jobs = useSelector((state) => state.mainReducer.searchResults.content);
  const searchQuery = useSelector((state) => state.mainReducer.searchQuery);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSearchQuery(query));
    dispatch(fetchJobs(query));

    /*   try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    } */
  };

  return (
    <Container>
      {error && <Alert variant="danger">{error}</Alert>}
      <NavSearch />
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
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
      </Row>
    </Container>
  );
};

export default MainSearch;
