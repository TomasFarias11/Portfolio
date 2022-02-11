import React from "react";
import Typewriter from "typewriter-effect";
import {useDispatch, useSelector} from 'react-redux';

function Type() {
  const ingles = useSelector((state) => state.ingles)
  return (
    <Typewriter
      options={{
        strings: ingles ? [
          'Software Developer...',
          'Continuosly Learning...',
          'Leader...' ,
          'Passionate...' 
        ]: [
          "Desarrollador Web...",
          "Continuo Aprendizaje...",
          "Lider...",
          "Apasionado...",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
