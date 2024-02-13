import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Job from "./Job";
import MyNavbar from "../components/NavBar";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const [companyName, setCompanyName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.companyName);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://strive-benchmark.herokuapp.com/api/jobs?company=${companyName}&user=${userName}&email=${email}`
    );
    if (response.ok) {
      const { data } = await response.json();
      setJobs(data);
    } else {
      alert("Error fetching results");
    }
  };

  // Calcola l'indice per dividere le cards tra sinistra e destra
  const splitIndex = Math.ceil(jobs.length / 2);

  return (
    <Container>
      <MyNavbar /> {/* Usa il componente Navbar qui */}
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="Enter user name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Col>
          <Col>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col>
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <Col>
          <Row>
            {jobs.slice(0, splitIndex).map((jobData) => (
              <Col md={6} key={jobData._id}>
                <Job data={jobData} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col>
          <Row>
            {jobs.slice(splitIndex).map((jobData) => (
              <Col md={6} key={jobData._id}>
                <Job data={jobData} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
