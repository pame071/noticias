import React from 'react';
import style from './Formulario.module.css';
import useSelect from '../hooks/useSelect';
import PropTypes from 'prop-types';

const Formulario = ({guardarCategoria}) => {

   const OPCIONES = [
      { value: 'general', label: 'Genaral' },
      { value: 'businnes', label: 'Negocios' },
      { value: 'entertainment', label: 'Entretenimiento' },
      { value: 'health', label: 'Salud' },
      { value: 'science', label: 'Ciencia' },
      { value: 'sport', label: 'Deporte' },
      { value: 'technology', label: 'Tecnologia' },
   ]

   //Utilizar custom hook
   const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

   // submit form, pasar categoria a app.js
   const buscarNoticia = e => {
      e.preventDefault();
      guardarCategoria(categoria);
   }

   return (
      <div className={`row ${style.buscador}`}>
         <div className=" col s12 m8 offset-m2">
            <form
               onSubmit={buscarNoticia}
            >
               <h2 className={style.heading}>Encuentra noticias por categoria</h2>

               <SelectNoticias />

               <div className="input-field col s12"> 
                  <input 
                     type="submit"
                     className={`btn-large amber darken-2 ${style['btn-block']}`}
                     value="Buscar"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

Formulario.propTypes = {
   guardarCategoria: PropTypes.func.isRequired,
};

export default Formulario;