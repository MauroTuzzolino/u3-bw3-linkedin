import React from "react";
import { Card, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MySidebar = () => {
  return (
    <div
      className="d-flex flex-column"
      style={{
        width: "100%",
        maxWidth: "250px",
        margin: "0 auto"
      }}
    >
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center">
            <strong>Lingua del profilo</strong>
            <i className="bi bi-pencil" style={{ cursor: "pointer" }} title="Modifica lingua del profilo"></i>
          </div>
          <div className="mt-2">Italiano</div>
          <hr />
          <Card.Text>
            <strong>Link pubblico</strong>{" "}
            <a href="https://www.linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/tuo-profilo
            </a>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Image src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png" style={{ width: "100%", height: "auto" }} alt="Profile" />
      </Card>

      {/* Groups Section */}
      <Card>
        <Card.Header>I tuoi gruppi</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item action>Gruppo 1</ListGroup.Item>
          <ListGroup.Item action>Gruppo 2</ListGroup.Item>
          <ListGroup.Item action>Gruppo 3</ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
};

export default MySidebar;
