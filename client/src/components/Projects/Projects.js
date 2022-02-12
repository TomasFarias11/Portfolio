import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {useSelector} from 'react-redux';
import leaf from "../../Assets/Projects/leaf.png";
import food from "../../Assets/FOOD PI.png"
import dog from "../..//Assets/DOG PI.png"
import apple from "../../Assets/Apple ECOM.png"
import piwoBeer from "../../Assets/PIWO Beer.jpg";

function Projects() {
  const ingles = useSelector((state) => state.ingles)
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
           <strong className="purple">{ingles ? 'My Projects' : 'Mis Proyectos'} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {ingles ? 'This are some projects I have been working on.' : 'Estos son algunos proyectos con los que estuve trabajando.'}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title={ingles ? 'E-Commerce Team Project - Apple' : "Proyecto Grupal E-Commerce - Apple"}
              description={ingles ? 'E-Commerce of Apple Products - Reseller. ' : "E-Commerce de venta de productos de Apple."}
              link="https://github.com/TomasFarias11/Front-ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piwoBeer}
              isBlog={false}
              title={ingles ? 'E-Commerce Team Project - PIWO Beers' : "Proyecto Grupal E-Commerce - PIWO Cerveza"}
              description={ingles ? 'E-Commerce - Sale of Homemade Beers.' : "E-Commerce de venta de cervezas artesanales."}
              link="https://github.com/LuisRocca/Pg-PIWO"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dog}
              isBlog={false}
              title={ingles ? 'Individual Project - Henry Dogs' : "Proyecto Individual - Henry Dogs"}
              description={ingles ? 'Individual Project of Breed of Dogs and Their Temperaments.' : "Proyecto Individual de Razas de perros y sus temperamentos"}
              link="https://github.com/TomasFarias11/PI_DOG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title={ingles ? 'Individual Project - Henry Food' : "Proyecto Individual - Henry Food"}
              description={ingles ? 'Individual Project of Food Recipes and Their Type of Diets.' : "Proyecto Individual de Recetas de comidas y sus distintos tipos de dietas"}
              link="https://github.com/TomasFarias11/PI---Henry-Food"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
