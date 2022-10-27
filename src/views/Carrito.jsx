import { useContext } from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import Context from "../Context";

const Carrito = (props) => {
  const { carrito } = useContext(Context);
  return (
    <div className="container-carrito">
      <h5>Detalle de pedido</h5>
      <ListGroup variant="flush">
        {carrito.map((pizza) => (
          <ListGroup.Item key={pizza.id}>
            <div className="carrito-pizza">
              <div className="pizza">
                <Card.Img
                  className="img-carrito"
                  src={pizza.img}
                  variant="top"
                />
                <h6 className="nombre-carrito">{pizza.name}</h6>
              </div>
              <div className="precio-pizza">
                <h5 className="precio">CLP$:{pizza.qty * pizza.price}</h5>
                <Button
                  onClick={() => props.deletePizza(pizza)}
                  variant="danger"
                >
                  -
                </Button>
                <h4 className="cantidad-pizza">{pizza.qty}</h4>
                <Button onClick={() => props.addPizza(pizza)} variant="info">
                  +
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="total-pagar">
        <h3 className="total">
          Total:
          {props.totalPagar.toLocaleString("en-EN", {
            style: "currency",
            currency: "CLP",
          })}
        </h3>
        <Button variant="success">pagar pedido</Button>
      </div>
    </div>
  );
};

export default Carrito;
