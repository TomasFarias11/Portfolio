import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import {useDispatch, useSelector} from 'react-redux';
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.jpeg";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title={ingles ? 'E-Commerce Team Project - Apple' : "Proyecto Grupal E-Commerce - Apple"}
              description={ingles ? 'E-Commerce of Apple Products - Reseller. ' : "E-Commerce de venta de productos de Apple."}
              link="https://github.com/TomasFarias11/Front-ecommerce"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title={ingles ? 'E-Commerce Team Project - PIWO Beers' : "Proyecto Grupal E-Commerce - PIWO Cerveza"}
              description={ingles ? 'E-Commerce - Sale of Homemade Beers.' : "E-Commerce de venta de cervezas artesanales."}
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title={ingles ? 'Individual Project - Henry Dogs' : "Proyecto Individual - Henry Dogs"}
              description={ingles ? 'Individual Project of Breed of Dogs and Their Temperaments.' : "Proyecto Individual de Razas de perros y sus temperamentos"}
              link="https://github.com/TomasFarias11/PI_DOG"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title={ingles ? 'Individual Project - Henry Food' : "Proyecto Individual - Henry Food"}
              description={ingles ? 'Individual Project of Food Recipes and Their Type of Diets.' : "Proyecto Individual de Recetas de comidas y sus distintos tipos de dietas"}
              link="https://github.com/soumyajit4419/Bits-0f-C0de"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
