import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
  const activeClass = ({ isActive }) => (isActive ? "active" : "noActive");

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <div className="navlink">
          <NavLink className={activeClass} to="/"><a href='https://postimg.cc/ygp2RJ82'><img className="icono-pizza" src='https://i.postimg.cc/ygp2RJ82/pizza.png' border='0' alt='pizza'/></a>
            Pizzeria Mamma Mia
          </NavLink>
          <NavLink className={activeClass} to="/carrito"><a href='https://postimg.cc/phQJN4gC'><img className="icono-carrito" src='https://i.postimg.cc/phQJN4gC/carrito-de-compras.png' border='0' alt='carrito-de-compras'/></a>
            Carrito
          </NavLink>
        </div>
        <h5>CLP$
          {props.totalPagar}
        </h5>
      </Container>
    </Navbar>
  );
};

export default NavBar;
