import React from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavourite } from "../redux/reducers/favouriteReducer";
import { useNavigate } from "react-router-dom"; // Importa useNavigate da react-router-dom

const Favourites = () => {
  const favourites = useSelector((state) => state.favourite.list);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Ottieni la funzione navigate

  const handleRemoveFromFavourites = (companyName) => {
    dispatch(removeFromFavourite(companyName));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Favourites</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {favourites.map((fav, i) => (
              <ListGroupItem key={i}>
                <Job data={{ company_name: fav }} />
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromFavourites(fav)}
                >
                  Delete
                </Button>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
