import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import homeLogo from "../../Assets/home-main.svg";

import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const tema = useSelector((state) => state.temaClaro)
  const ingles = useSelector((state) => state.ingles)

  return (
    <section>
      {/* <button onClick={(e) => handleIngles(e)}>English/Espanol</button> */}
      <Container fluid className={!tema ? "home-section" : "home-section-theme-claro"} id="home">
        <Particle />
        <Container className="home-content">
          <Row>
              
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {ingles ? 'Welcome!' : 'Bienvenido!'} <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                {ingles ? 'My name is': 'Me llamo'}
                <strong className="main-name"> TOMAS ALEJANDRO FARIAS</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <Button onClick={(e) => handleTema(e)}>Claro/Oscuro</Button> */}
      
      <Home2 />
    </section>
  );
}

export default Home;
