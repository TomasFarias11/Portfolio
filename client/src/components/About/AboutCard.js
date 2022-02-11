import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import {useDispatch, useSelector} from 'react-redux';

function AboutCard() {
  const ingles = useSelector((state) => state.ingles)
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {ingles ? 'Hi! my name is' : 'Hola! , mi nombre es'} <span className="purple">Tomas Alejandro Farias </span>
            {ingles ? 'I am from' : 'soy de'} <span className="purple"> Buenos Aires, Argentina.</span>
            <br /> {ingles ? 'I am a Full Stack Software Developer and a Mechatronic Technician ' : 'Soy un desarrollador web full stack con titulo secundario en Tecnico Mecatronico.'}
            <br />
            <br />
            {ingles ? 'But programming is not the only thing that I love to do, I also like to do other activities like: ': 'Pero no solo amo la programacion, si no que tambien me encantan otras actividades, tales como:'}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {ingles ? 'Doing sports' : 'Hacer deporte'}
            </li>
            <li className="about-activity">
              <ImPointRight /> {ingles ? 'Play de guitar' : 'Tocar la guitarra'}
            </li>
            <li className="about-activity">
              <ImPointRight /> {ingles ? 'Travel de world' : 'Viajar por el mundo'}
            </li>
          </ul>

          {/* <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
