import { useEffect } from "react";
import { Container, Row, Col, Card, Button, ListGroup, Image, Spinner } from "react-bootstrap";
import {
  FaInfoCircle,
  FaBookmark,
  FaUsers,
  FaNewspaper,
  FaPlus,
  FaImage,
  FaVideo,
  FaRegCalendarAlt,
  FaEllipsisH,
  FaGlobeAmericas,
  FaThumbsUp,
  FaCommentDots,
  FaShare,
  FaPaperPlane,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile } from "../redux/actions";
import coverImage from "../assets/images/placeholderCover.png";

const HomePage = () => {
  const dispatch = useDispatch();

  const myProfile = useSelector((state) => state.myProfile.content);

  useEffect(() => {
    dispatch(getMyProfile());
  }, [dispatch]);

  if (!myProfile) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Caricamento profilo...</span>
      </Spinner>
    );
  }

  return (
    <Container>
      <Row>
        {/* Colonna sinistra - Profilo */}
        <Col lg={3}>
          <Card className="mb-3">
            <Card.Img variant="top" src={coverImage} alt="Immagine di copertina" style={{ objectFit: "cover", height: "80px" }} />
            <Card.Body className="text-center position-relative pt-0">
              <Image
                src={myProfile.image}
                roundedCircle
                className="border border-white border-3"
                style={{ width: "80px", height: "80px", marginTop: "-40px", objectFit: "cover" }}
              />
              <Card.Title className="mb-0 mt-2">
                {myProfile.name} {myProfile.surname}
              </Card.Title>
              <Card.Text className="text-muted small">{myProfile.title}</Card.Text>
              <Card.Text className="text-muted small">{myProfile.area}</Card.Text>
              <Card.Text className="text-muted small">{myProfile.bio}</Card.Text>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Visualizzazioni del profilo</small>
                <strong>10</strong>
              </div>
              <Button variant="link" className="p-0 text-decoration-none">
                Visualizza tutte le analisi
              </Button>
              <hr />
              <div className="d-flex justify-content-between align-items-center mb-2">
                <small className="text-muted">Sblocca 4 volte più visite del profilo</small>
              </div>
              <Button variant="link" className="p-0 text-decoration-none text-warning">
                Riativa Premium
              </Button>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaBookmark className="me-2" />
                  <small>Elementi salvati</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaUsers className="me-2" />
                  <small>Gruppi</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaNewspaper className="me-2" />
                  <small>Newsletter</small>
                </ListGroup.Item>
                <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0">
                  <FaPlus className="me-2" />
                  <small>Eventi</small>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna centrale - Feed */}
        <Col lg={6}>
          {/* Sezione Crea un post */}
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image src={myProfile.image} roundedCircle className="me-3" style={{ height: "45px" }} />
                <Button variant="outline-secondary" className="rounded-pill text-start flex-grow-1">
                  Crea un post
                </Button>
              </div>
              <div className="d-flex justify-content-around">
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaVideo className="text-success me-2" />
                  Video
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaImage className="text-primary me-2" />
                  Foto
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaRegCalendarAlt className="text-warning me-2" />
                  Scrivi un articolo
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Separatore */}
          <div className="d-flex align-items-center text-muted mb-3">
            <hr className="flex-grow-1" />
            <small className="mx-2">Seleziona la visualizzazione del feed:</small>
            <Button variant="link" className="p-0 text-decoration-none">
              <small>Più rilevanti per primi</small>
            </Button>
          </div>

          {/* Esempio di Post */}
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <Image src="https://via.placeholder.com" roundedCircle className="me-2" />
                  <div>
                    <strong>Guido Penta</strong> ha diffuso questo post
                    <div className="text-muted small">
                      1 ora • Modificato • <FaGlobeAmericas />
                    </div>
                  </div>
                </div>
                <FaEllipsisH className="text-muted" />
              </div>
              <div className="d-flex align-items-center mb-3">
                <Image src="https://via.placeholder.com" roundedCircle className="me-2" />
                <div>
                  <strong>Luana Elia</strong> <FaPlus className="text-primary ms-1" />
                  <div className="text-muted small">Unconventional Full Stack Recruiter @Welleya | Per ma...</div>
                  <Button variant="link" className="p-0 text-decoration-none">
                    Visualizza i miei servizi
                  </Button>
                  <div className="text-muted small">
                    1 ora • Modificato • <FaGlobeAmericas />
                  </div>
                </div>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias voluptatem aut qui aliquid itaque maiores, tempora odit, nostrum blanditiis
                est corporis quos commodi vero quisquam ex iusto? Commodi, repellat.{" "}
                <Button variant="link" className="p-0 text-decoration-none">
                  altro
                </Button>
              </Card.Text>
              <div className="d-flex align-items-center text-muted small mb-2">
                <FaThumbsUp className="text-primary me-1" />
                <span>Guido Penta e 51 altre persone</span>
                <span className="ms-auto">8 commenti • 10 diffusioni post</span>
              </div>
              <hr />
              <div className="d-flex justify-content-around">
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaThumbsUp className="me-2" />
                  Consiglia
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaCommentDots className="me-2" />
                  Commenta
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaShare className="me-2" />
                  Diffondi il post
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaPaperPlane className="me-2" />
                  Invia
                </Button>
              </div>
            </Card.Body>
          </Card>

          {/* Un altro esempio di Post */}
          <Card className="mb-3">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <Image src="https://via.placeholder.com" roundedCircle className="me-2" />
                  <div>
                    <strong>Guido Penta</strong> ha diffuso questo post
                    <div className="text-muted small">
                      1 ora • Modificato • <FaGlobeAmericas />
                    </div>
                  </div>
                </div>
                <FaEllipsisH className="text-muted" />
              </div>
              <div className="d-flex align-items-center mb-3">
                <Image src="https://via.placeholder.com" roundedCircle className="me-2" />
                <div>
                  <strong>Luana Elia</strong> <FaPlus className="text-primary ms-1" />
                  <div className="text-muted small">Unconventional Full Stack Recruiter @Welleya | Per ma...</div>
                  <Button variant="link" className="p-0 text-decoration-none">
                    Visualizza i miei servizi
                  </Button>
                  <div className="text-muted small">
                    1 ora • Modificato • <FaGlobeAmericas />
                  </div>
                </div>
              </div>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At alias voluptatem aut qui aliquid itaque maiores, tempora odit, nostrum blanditiis
                est corporis quos commodi vero quisquam ex iusto? Commodi, repellat.{" "}
                <Button variant="link" className="p-0 text-decoration-none">
                  altro
                </Button>
              </Card.Text>
              <div className="d-flex align-items-center text-muted small mb-2">
                <FaThumbsUp className="text-primary me-1" />
                <span>Guido Penta e 51 altre persone</span>
                <span className="ms-auto">8 commenti • 10 diffusioni post</span>
              </div>
              <hr />
              <div className="d-flex justify-content-around">
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaThumbsUp className="me-2" />
                  Consiglia
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaCommentDots className="me-2" />
                  Commenta
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaShare className="me-2" />
                  Diffondi il post
                </Button>
                <Button variant="link" className="text-muted text-decoration-none d-flex align-items-center">
                  <FaPaperPlane className="me-2" />
                  Invia
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Colonna destra - Notizie e Pubblicità */}
        <Col lg={3}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="mb-3 d-flex justify-content-between align-items-center">
                <strong>LinkedIn Notizie</strong>
                <FaInfoCircle className="fs-6" />
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item className="px-0 border-0">
                  <strong>Se la radio scompare dall'auto</strong>
                  <div className="text-muted small">18 ore fa • 131 lettori</div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 border-0">
                  <strong>Voci dal pride month</strong>
                  <div className="text-muted small">1 giorno fa • 218 lettori</div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 border-0">
                  <strong>Credeem cerca nuovi bancari</strong>
                  <div className="text-muted small">1 ora fa • 182 lettori</div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 border-0">
                  <strong>È la Giornata mondiale dell'ambiente</strong>
                  <div className="text-muted small">1 ora fa</div>
                </ListGroup.Item>
                <ListGroup.Item className="px-0 border-0">
                  <strong>Occupazione stabile ad aprile</strong>
                  <div className="text-muted small">1 giorno fa</div>
                </ListGroup.Item>
                <Button variant="link" className="p-0 text-decoration-none">
                  Mostra altro
                </Button>
              </ListGroup>
            </Card.Body>
          </Card>

          {/* Card "Il rompicapo di oggi" */}
          <Card className="mb-3">
            <Card.Body>
              <Card.Title className="mb-3">Il rompicapo di oggi</Card.Title>
              <div className="d-flex align-items-center mb-3">
                <Image src="https://via.placeholder.com" alt="Logo Zip" className="me-2" />
                <div>
                  <strong>Zip – un rompicapo veloce</strong>
                  <div className="text-muted small">Rispondilo in 60 secondi o meno!</div>
                </div>
              </div>
              <Button variant="link" className="p-0 text-decoration-none">
                Puoi solo vedere il punteggio
              </Button>
            </Card.Body>
          </Card>

          {/* Card pubblicitaria */}
          <Card className="mb-3">
            <Card.Body className="text-center">
              <small className="text-muted">Promosso</small> <FaEllipsisH className="text-muted" />
              <Image src="https://via.placeholder.com" alt="V-Valley Logo" className="mb-3" />
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quod itaque nihil cum aspernatur quidem debitis natus culpa ipsam, accusamus
                aliquid hic mollitia neque dolor quo unde eum repellat dolore.
              </Card.Text>
              <Button variant="outline-primary" className="rounded-pill">
                Segui
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
