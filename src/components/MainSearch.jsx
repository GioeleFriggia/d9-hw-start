import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

const MainSearch = () => {
  const [query, setQuery] = useState("");
  const [searchUser, setSearchUser] = useState(""); // Stato per il campo di ricerca dell'utente
  const [user, setUser] = useState(""); // Stato per il campo user
  const [jobs, setJobs] = useState([]);
  const [isUserEntered, setIsUserEntered] = useState(false); // Stato per controllare se l'utente ha inserito un nome
  const [showWelcomeModal, setShowWelcomeModal] = useState(false); // Stato per il modale di benvenuto

  const navigate = useNavigate();

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Funzione per gestire il cambio di valore nel campo user
  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  // Funzione per gestire il cambio di valore nel campo di ricerca dell'utente
  const handleSearchUserChange = (e) => {
    setSearchUser(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verifica se l'utente ha inserito un nome prima di eseguire la ricerca
    if (!user) {
      alert("Please enter a user name");
      return;
    }

    try {
      // Modifica della richiesta API per includere il valore del campo user
      const response = await fetch(
        baseEndpoint + query + "&user=" + user + "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
        setShowWelcomeModal(true); // Visualizza il modale di benvenuto
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="Type and press Enter"
            />
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              // Disabilita il pulsante di ricerca se l'utente non ha inserito un nome
              disabled={!user}
            >
              Search
            </Button>
          </Form>
        </Col>
        <Col xs={2} className="text-right">
          <Form.Control
            type="text"
            value={user}
            onChange={handleUserChange}
            placeholder="Enter user"
          />
          <Button
            variant="primary"
            type="submit"
            className="mt-3"
            // Disabilita il bottone se l'utente non ha inserito un nome
            disabled={!user}
            onClick={handleSubmit} // Azione da eseguire quando il bottone viene cliccato
          >
            Submit
          </Button>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
      {/* Modale di benvenuto */}
      <Modal show={showWelcomeModal} onHide={() => setShowWelcomeModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome, {user}!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Welcome to our platform. We hope you find what you're looking for!
          </p>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MainSearch;
