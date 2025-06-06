import { useState, useEffect } from "react";
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
  FaPen,
  FaTrash,
  FaGlobeAmericas,
  FaThumbsUp,
  FaCommentDots,
  FaShare,
  FaPaperPlane,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getMyProfile, updatePost } from "../redux/actions";
import coverImage from "../assets/images/placeholderCover.png";
import { fetchPosts } from "../redux/actions";
import avatar from "../assets/images/avatar.svg";
import CreatePost from "./CreatePost";
import { openModal } from "../redux/actions/index";
import { Link } from "react-router-dom";
import EditPostModal from "./EditPostModal";
import { deletePost } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myProfile = useSelector((state) => state.myProfile.content);
  const posts = useSelector((state) => state.posts.posts);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedText, setUpdatedText] = useState("");

  // Funzione per aprire il modale con il post selezionato
  const handleEditPost = (post) => {
    setSelectedPost(post);
    setUpdatedText(post.text);
    setShowModal(true);
  };

  // Funzione per salvare le modifiche al post
  const handleSavePost = () => {
    if (selectedPost) {
      dispatch(updatePost(selectedPost._id, { text: updatedText }));
      setShowModal(false);
    }
  };
  const handleDeletePost = (postId) => {
    const confirmDelete = window.confirm("Sei sicuro di voler eliminare questo post?");
    if (confirmDelete) {
      dispatch(deletePost(postId)); // Chiama l'azione Redux per eliminare il post
    }
  };

  useEffect(() => {
    dispatch(getMyProfile());
    dispatch(fetchPosts());
  }, [dispatch]);

  if (!myProfile) {
    return (
      <Spinner animation="border" role="status" variant="info">
        <span className="visually-hidden">Caricamento profilo...</span>
      </Spinner>
    );
  }

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
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
                <Card.Title className="mb-0 mt-2" style={{ cursor: "pointer" }} onClick={() => navigate("/me")}>
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
                  Riattiva Premium
                </Button>
              </Card.Body>
            </Card>

            <Card className="mb-3">
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex align-items-center py-1 px-0 border-0" as={Link} to={"/Favourites"}>
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
                  <Image src={myProfile.image} roundedCircle className="me-3" style={{ height: "45px", width: "45px", objectFit: "cover" }} />
                  <Button variant="outline-secondary" onClick={() => dispatch(openModal())} className="rounded-pill text-start flex-grow-1">
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

            {/*Post*/}

            {posts
              .slice()
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .slice(0, 9)
              .map((post) => {
                return (
                  <Col key={post._id}>
                    <Card className="p-3 mb-2">
                      <Card.Body>
                        {/* Header con nome, immagine e bottoni */}
                        <div className="d-flex align-items-center justify-content-between mb-2">
                          <div className="d-flex align-items-center">
                            <Card.Img
                              src={post.user?.image || avatar}
                              alt="avatar"
                              className="rounded-circle me-2"
                              style={{ width: "40px", height: "40px", objectFit: "cover" }}
                            />
                            <div>
                              <Card.Title className="m-0" style={{ cursor: "pointer" }} onClick={() => navigate(`/other/${post.user._id}`)}>
                                {post.user?.name} {post.user?.surname}
                              </Card.Title>
                              <Card.Subtitle className="text-muted small">{post.user?.title}</Card.Subtitle>
                            </div>
                          </div>

                          {/* Bottoni modifica ed elimina solo se è il tuo post */}
                          {post.user?._id === myProfile._id && (
                            <div>
                              <Button variant="link" className="text-muted p-1" onClick={() => handleEditPost(post)} title="Modifica">
                                <FaPen />
                              </Button>
                              <Button variant="link" className="text-danger p-1" onClick={() => handleDeletePost(post._id)} title="Elimina">
                                <FaTrash />
                              </Button>
                            </div>
                          )}
                        </div>

                        {/* Testo del post */}
                        <Card.Text>{post.text || "Nessun testo disponibile."}</Card.Text>

                        {/* Date */}
                        <Card.Text className="d-flex justify-content-between">
                          <small className="text-muted">Modificato il {new Date(post.updatedAt).toLocaleDateString()}</small>
                          <small className="text-muted">Postato il {new Date(post.createdAt).toLocaleDateString()}</small>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
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
                  <Image src="https://cdn.creazilla.com/cliparts/3160675/puzzle-clipart-xl.png" alt="Logo Zip" className="me-2" style={{ height: "100px" }} />
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
                <div className="d-flex align-items-center justify-content-between">
                  <small>Promosso</small>
                  <FaEllipsisH />
                </div>

                <Image
                  src="https://media.licdn.com/dms/image/v2/C4E0BAQH1ZyFa1LMFXA/company-logo_200_200/company-logo_200_200/0/1657092186806/v_valley_the_value_of_esprinet_logo?e=2147483647&v=beta&t=ZNbDWukaQXhKUdQD-aVPkWhPuBbOBPqoDiAcJS-GAkk"
                  alt="V-Valley Logo"
                  className="mb-3"
                />
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
      {/* Modale per modificare il post */}
      <EditPostModal show={showModal} handleClose={() => setShowModal(false)} postText={updatedText} setPostText={setUpdatedText} handleSave={handleSavePost} />
      <CreatePost />
    </>
  );
};

export default HomePage;
