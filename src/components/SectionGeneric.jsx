import { Button, Card, Col, Row } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";
import { Pencil } from "react-bootstrap-icons";

const SectionGeneric = ({ header, title, subtitle, details, image, isMyProfile }) => {
  return (
    <Card className="my-2 py-3">
      <Card.Header className="bg-white border-0">
        <Row className="align-items-center">
          <Col>
            <h4>{header}</h4>
          </Col>
          <Col className="text-end">
            <Button variant="light" className="border-0 bg-transparent">
              <PlusLg className="me-3 " size={25} />
            </Button>
            <Button variant="light" className="border-0 bg-transparent">
              {isMyProfile && <Pencil size={25} style={{ cursor: "pointer" }} />}
            </Button>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col md={1} className="d-none d-md-block">
            <img src={image} alt="graphic" className="img-fluid" />
          </Col>

          <Col>
            <h5>{title}</h5>
            <h6>{subtitle}</h6>
            <p>{details}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default SectionGeneric;
