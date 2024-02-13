// components/MainSearch.jsx

import { useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchSearchResults } from "../redux/actions";
import Job from "./Job";

const MainSearch = () => {
  const jobs = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchSearchResults(""));
  }, [dispatch]);

  const handleChange = (e) => {
    // Esempio di come potresti gestire il cambio di query di ricerca
    dispatch(fetchSearchResults(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Esempio di come potresti gestire la ricerca all'invio del form
    // dispatch(fetchSearchResults(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Button onClick={() => navigate("/favourites")}>Favourites</Button>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              // value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
