import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Container } from "react-bootstrap";
import Context from "../Context";

const Home = (props) => {
  const navigate = useNavigate();
  const { pizzas, setPizzaId } = useContext(Context);

  return (
    //grid-columns-5
    <Container className="galeria p-3">
      {pizzas.map((pizza) => (
        <Card style={{ width: "18rem" }} key={pizza.id}>
          <Card.Img className="img" variant="top" src={pizza.img} />
          <Card.Title className="nombre-pizza">
            <h3>{pizza.name}</h3>
          </Card.Title>
          <hr />
          {pizza.ingredients.map((i) => (
            <Card.Text>
              <a href="https://postimg.cc/ygp2RJ82">
                <img
                  className="icono-pizza"
                  src="https://i.postimg.cc/ygp2RJ82/pizza.png"
                  border="0"
                  alt="pizza"
                />
              </a>
              {i.charAt(0).toUpperCase() + i.slice(1)}
            </Card.Text>
          ))}
          <hr />
          <h4>
            {pizza.price.toLocaleString("en-EN", {
              style: "currency",
              currency: "CLP",
            })}
          </h4>
          <div className="botones">
            <Button
              onClick={() =>
                navigate(`/pizza/${pizza.id}`) || setPizzaId(pizza)
              }
              variant="primary"
            >
              Ver mas
            </Button>
            <Button onClick={() => props.addPizza(pizza)} variant="danger">
              Añadir
            </Button>
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Home;
