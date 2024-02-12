// components > CompanySearchResults.js

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFromFavorites,
} from "../redux/slices/favoriteSlice";

const CompanySearchResults = () => {
  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
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

  const handleAddToFavorites = (company) => {
    dispatch(addFavorite(company));
  };

  const handleRemoveFromFavorites = (company) => {
    dispatch(removeFromFavorites(company));
  };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job
              key={jobData._id}
              data={jobData}
              isFavorite={favorites.includes(jobData.company_name)}
              onAddToFavorites={handleAddToFavorites}
              onRemoveFromFavorites={handleRemoveFromFavorites}
            />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
