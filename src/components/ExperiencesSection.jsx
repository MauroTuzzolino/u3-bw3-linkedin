import { Button, Card, Col, Row } from "react-bootstrap";
import { PlusLg, Pencil } from "react-bootstrap-icons";
import Graphic from "../assets/images/graphic.png";

const ExperiencesSection = ({ experiences = [], image }) => {
  return (
    <Card className="my-2 py-3">
      <Card.Header className="bg-white border-0">
        <Row className="align-items-center">
          <Col>
            <h4>Esperienze</h4>
          </Col>
          <Col className="text-end">
            <Button variant="light" className="border-0 bg-transparent">
              <PlusLg className="me-3" size={25} />
            </Button>
            <Button variant="light" className="border-0 bg-transparent">
              <Pencil size={25} />
            </Button>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
        {experiences.map((exp, index) => (
          <Row key={exp._id || index} className="mb-3 border-bottom">
            <Col md={1} className="d-none d-md-block">
              <img src={exp.image} alt="graphic" className="img-fluid" />
            </Col>
            <Col>
              <h5>{exp.role}</h5>
              <h6>{exp.company}</h6>
              <p>
                {exp.startDate?.substring(0, 10)} - {exp.endDate?.substring(0, 10)}
              </p>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  );
};

export default ExperiencesSection;
