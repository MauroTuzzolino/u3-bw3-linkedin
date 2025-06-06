import { useSelector, useDispatch } from "react-redux";
import { Container, ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFavourite } from "../redux/actions/index"; // Assicurati che questa action sia definita

const Favourites = () => {
  const dispatch = useDispatch();

  // Recupero la lista delle aziende preferite dallo store Redux
  const favourites = useSelector((state) => state.favourites.list);

  // Funzione per gestire la rimozione di un'azienda dai preferiti
  const handleRemove = (company) => {
    dispatch(removeFavourite(company));
  };

  return (
    <Container className="mt-5">
      <h2>Aziende Preferite</h2>

      {/* Se la lista è vuota, mostro un messaggio */}
      {favourites.length === 0 ? (
        <p>Nessuna azienda tra i preferiti.</p>
      ) : (
        <ListGroup>
          {favourites.map((company, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              {/* Nome dell'azienda come link cliccabile */}
              <Link to={`/${company}`}>{company}</Link>

              {/* Pulsante per rimuovere l'azienda dai preferiti */}
              <Button variant="outline-danger" size="sm" onClick={() => handleRemove(company)}>
                Rimuovi
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </Container>
  );
};

export default Favourites;
