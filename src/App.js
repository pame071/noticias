import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';

function App() {

  const [ categoria, guardarCategoria] = useState('');
  const [ noticias, guardarNoticias] = useState([]);

  useEffect (()=>{

    const consultarApi = async () =>{
      const url = `http://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=c651de14bf8c42cca7b1ec15796e3551`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    consultarApi();

  },[categoria])
  return (
    <>
      <Header 
        titulo='Buscador de noticias'
      />
      <div className="container white">
        <Formulario 
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
