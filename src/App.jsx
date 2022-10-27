import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Context from "./Context";

import NavBar from "./components/NavBar";
import Home from "./views/Home";
import Pizza from "./views/Pizza";
import Carrito from "./views/Carrito";
import NotFound404 from "./views/NotFound404";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/NavBar.css";
import "./assets/Home.css";
import "./assets/Pizza.css";
import "./assets/Carrito.css";
import "./assets/NotFound404.css"

function App() {
  const [pizzaId, setPizzaId] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const estadoGlobal = {
    pizzaId,
    setPizzaId,
    pizzas,
    setPizzas,
    carrito,
    setCarrito,
  };
  const totalPagar = carrito.reduce((a, c) => a + c.qty * c.price, 0);
  const getPizzas = async () => {
    const endpoint = "./pizzas.json";
    const url = `http://localhost:3000/${endpoint}`;
    const res = await fetch(url);
    const data = await res.json();
    setPizzas(data);
  };

  useEffect(() => {
    getPizzas();
  }, []);
  const addPizza = (p) => {
    const newPizza = carrito.find((x) => x.id === p.id);

    if (carrito.find((x) => x.id === p.id)) {
      setCarrito(
        carrito.map((x) =>
          x.id === p.id ? { ...newPizza, qty: newPizza.qty + 1 } : x
        )
      );
    } else {
      setCarrito([...carrito, { ...p, qty: 1 }]);
    }
  };

  const deletePizza = (p) => {
    const newP = carrito.find((x) => x.id === p.id);
    if (newP.qty === 1) {
      setCarrito(carrito.filter((x) => x.id !== p.id));
    } else {
      setCarrito(
        carrito.map((x) =>
          x.id === p.id ? { ...newP, qty: newP.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <Context.Provider value={estadoGlobal}>
        <BrowserRouter>
          <NavBar totalPagar={totalPagar} />

          <Routes>
            <Route path="pizza/">
              <Route path=":id" element={<Pizza addPizza={addPizza} />} />
            </Route>
            <Route path="/" element={<Home addPizza={addPizza} />} />
            <Route
              path="/Carrito"
              element={
                <Carrito
                  addPizza={addPizza}
                  deletePizza={deletePizza}
                  totalPagar={totalPagar}
                />
              }
            />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
