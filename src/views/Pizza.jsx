import { useContext } from "react";
import Context from "../Context";

import { Card, Button, Container } from "react-bootstrap";

const Pizza = (props) => {
  const { pizzaId } = useContext(Context);

  return (
    <Container className="contenedor-detalles p-3">
      <Card className="contenedor-card" key={pizzaId.id}>
        <Card.Img className="img-detalle" variant="top" src={pizzaId.img} />

        <div className="info">
          <Card.Title>{pizzaId.name}</Card.Title>
          <hr />
          <Card.Text>{pizzaId.desc}</Card.Text>
          <h6>ingredientes:</h6>
          <Card.Text>
            <a href="https://postimg.cc/ygp2RJ82">
              <img
                className="icono-pizza"
                src="https://i.postimg.cc/ygp2RJ82/pizza.png"
                border="0"
                alt="pizza"
              />
            </a>
            {pizzaId.ingredients[0]}
          </Card.Text>
          <Card.Text>
            <a href="https://postimg.cc/ygp2RJ82">
              <img
                className="icono-pizza"
                src="https://i.postimg.cc/ygp2RJ82/pizza.png"
                border="0"
                alt="pizza"
              />
            </a>
            {pizzaId.ingredients[1]}
          </Card.Text>
          <Card.Text>
            <a href="https://postimg.cc/ygp2RJ82">
              <img
                className="icono-pizza"
                src="https://i.postimg.cc/ygp2RJ82/pizza.png"
                border="0"
                alt="pizza"
              />
            </a>
            {pizzaId.ingredients[2]}
          </Card.Text>
          <Card.Text>
            <a href="https://postimg.cc/ygp2RJ82">
              <img
                className="icono-pizza"
                src="https://i.postimg.cc/ygp2RJ82/pizza.png"
                border="0"
                alt="pizza"
              />
            </a>
            {pizzaId.ingredients[3]}
          </Card.Text>
          <div className="boton">
            <h1>
              Precio:{" "}
              {pizzaId.price.toLocaleString("en-EN", {
                style: "currency",
                currency: "CLP",
              })}
            </h1>
            <Button
              className="detalle-boton"
              onClick={() => props.addPizza(pizzaId)}
              variant="danger"
            >
              Añadir
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Pizza;
