// CompanySearchResults.jsx

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Job from "./Job";
import MyNavbar from "../components/NavBar"; // Importa il componente Navbar

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
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

  // Calcola l'indice per dividere le cards tra sinistra e destra
  const splitIndex = Math.ceil(jobs.length / 2);

  return (
    <Container>
      <MyNavbar /> {/* Usa il componente Navbar qui */}
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
