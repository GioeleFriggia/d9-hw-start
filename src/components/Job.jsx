import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ data, isFavorite, onAddToFavorites, onRemoveFromFavorites }) => {
  const handleClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(data.company_name);
    } else {
      onAddToFavorites(data.company_name);
    }
  };

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <Button
          variant={isFavorite ? "danger" : "primary"}
          onClick={handleClick}
        >
          {isFavorite ? "Remove" : "Add"}
        </Button>
      </Col>
    </Row>
  );
};

export default Job;
