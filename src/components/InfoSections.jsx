import { Button, Card, Col, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { Pencil } from "react-bootstrap-icons";

const InfoSections = ({ details, isMyProfile }) => {
  return (
    <Card className="my-2 py-3">
      <Card.Header className="bg-white border-0">
        <Row className="align-items-center">
          <Col>
            <h4>Biografia</h4>
          </Col>
          <Col className="text-end">
            <Button variant="light" className="border-0 bg-transparent"></Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>
            <p>{details}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default InfoSections;
