import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import DatosCarrito from "./DatosCarrito";
import Container from "react-bootstrap/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import ShoppingCart from "./ShoppingCart";

import "./CardGroup.css";

export default function CardGroup({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) {
  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await fetch(
      "https://render-nodejs-react-healthfoods.onrender.com/products"
    ); // captura de datos desde el  del https://render-nodejs-react-healthfoods.onrender.com/     servidor - backend - Render
    // const response = await fetch("http://localhost:700/products");                                               // captura de datos desde el 7000 del servidor - backend

    const data = await response.json();
    console.log(data); // arreglos de los productos
    setProductos(data);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const onAddProduct = (producto) => {
    if (allProducts.find((item) => item.id === producto.id)) {
      const productos = allProducts.map((item) =>
        item.id === producto.id
          ? { ...item, cantidad_carrito: item.cantidad_carrito + 1 }
          : item
      );

      setTotal(total + producto.precio_pesos * producto.cantidad_carrito);
      setCountProducts(countProducts + producto.cantidad_carrito);

      return setAllProducts([...productos]);
    }

    console.log("Añadiendo al carrito ");

    setTotal(total + producto.precio_pesos * producto.cantidad_carrito);

    setCountProducts(countProducts + producto.cantidad_carrito);

    setAllProducts([...allProducts, producto]);
  };

  console.log(allProducts);

  return (
    <>
      <Row className=" container background-nuts mt-5 mb-5">
        {productos
          .filter((producto) => producto.categoria === "frutosSecos")
          .map((producto, index) => (
            <Col className="col  " key={index}>
              <Card className="card text-center m-3 w-100 ">
                <div className="overflow">
                  <Card.Img
                    variant="top"
                    src={producto.ruta_img}
                    className="img-fluid  card-img-top img-card"
                  />
                  <Card.Body>
                    <Card.Title>{producto.producto}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text> X {producto.cantidad_gramos}g </Card.Text>
                    <Card.Text>$ {producto.precio_pesos}</Card.Text>
                    <Button
                      onClick={() => onAddProduct(producto)}
                      variant="outline-secondary"
                    >
                      Agregar al carrito
                    </Button>
                  </Card.Body>
                </div>
              </Card>
            </Col>
          ))}
      </Row>

      <DatosCarrito DatosCarrito={productos}></DatosCarrito>
    </>
  );
}
