import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useDispatch, useSelector} from 'react-redux';
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const ingles = useSelector((state) => state.ingles)
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {ingles ? 'LET ME TELL YOU' : 'DEJENME'} <span className="purple"> {ingles ? 'ABOUT' : 'CONTARLES'} </span> {ingles ? 'ME' : 'SOBRE MI'}
            </h1>
            <p className="home-about-body">
              {ingles ? 'I fell in love with programming and i am a very ambitious person with a great desire to continue learning to become a great developer!' : 
              'Desde hace tiempo que me enamore de la programacion y soy una persona muy ambiciosa. Con muchas ganas de seguir aprendiendo cada vez mas y mas!'}
              <br />
              <br />{ingles ? 'I have knoledge in' : 'Tengo conocimientos en los lenguajes'}
              <i>
                <b className="purple"> {ingles ? 'Javascript, C and Python languages.' : 'Javascript, C y Python.'} </b>
              </i>
              <br />
              <br />
              {ingles ? 'with experience in the use of the following Back-End technologies ' : 'Con experencia en el uso de tecnologias Back-End tales como'}: &nbsp;
              <i>
                <b className="purple">Node.js, Express, PostgreSequelize. </b> {ingles ? 'As well, these Front-End technologies' : 'Como tambien en el area de Front-End:'} {" "}
                <b className="purple">
                  React.js, Redux, CSS, Bootstrap
                </b>
              </i>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{ingles ? 'CONTACT ME' : 'CONTACTO'}</h1>
            <p>
              {ingles ? 'You can' : 'Pueden'} <span className="purple">{ingles ? 'find me' : 'encontrarme'} </span>{ingles ? 'on' : 'en'}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/TomasFarias11"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tomasalejandrofariasdev/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
