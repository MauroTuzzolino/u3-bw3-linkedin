import { Card, ListGroup, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRandomUsers } from "../redux/actions/index";
import { Link } from "react-router-dom";

const MySidebar = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.profiles);

  useEffect(() => {
    dispatch(fetchRandomUsers());
  }, [dispatch]);

  if (loading) return <p>Caricamento...</p>;
  if (error) return <p>Errore</p>;

  return (
    <div
      className="d-flex flex-column"
      style={{
        width: "100%",
        maxWidth: "250px",
        margin: "0 auto",
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
            <strong>Link pubblico</strong> <Link to="/me"> linkedin.com/in/tuo-profilo</Link>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-3">
        <Image src="https://media.licdn.com/media/AAYABATPAAgAAQAAAAAAAKwYrfHUPkoBQGmwnaG71Ps_5Q.png" style={{ width: "100%", height: "auto" }} alt="Profile" />
      </Card>

      {/* Groups Section */}
      <Card>
        <Card.Header>
          <h6>Persone che potresti conoscere</h6>
        </Card.Header>
        <ListGroup variant="flush">
          {users.map((profile) => (
            <ListGroup.Item key={profile._id}>
              <h6>
                <Link to={`/other/${profile._id}`} className="text-decoration-none text-dark">
                  {" "}
                  <Image src={profile.image} className="rounded-circle me-2" style={{ height: "20px", width: "20px" }} />
                  {profile.name} {profile.surname}
                </Link>
              </h6>
              <p className="mb-0">{profile.title}</p>
            </ListGroup.Item>
          ))}
          {/*<ListGroup.Item action>Gruppo 1</ListGroup.Item>
          <ListGroup.Item action>Gruppo 2</ListGroup.Item>
          <ListGroup.Item action>Gruppo 3</ListGroup.Item>*/}
        </ListGroup>
      </Card>
    </div>
  );
};

export default MySidebar;
