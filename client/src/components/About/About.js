import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  const ingles = useSelector((state) => state.ingles)
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {ingles ? 'Who' : 'Quien'} <strong className="purple">{ingles ? 'AM I?' : 'SOY?'}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          {ingles ? 'Professional' : 'Habilidades'} <strong className="purple">{ingles ? 'Skillset' : 'Profesionales'} </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">{ingles ? 'Tools' : 'Herramientas'}</strong> {ingles ? 'I use' : 'Usadas'}
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
