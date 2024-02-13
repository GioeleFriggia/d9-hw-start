import React from "react";
import { Container } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="footer">
      <Container>
        <p> Remote Job/ &copy; {new Date().getFullYear()} </p>
      </Container>
    </footer>
  );
};

export default MyFooter;
