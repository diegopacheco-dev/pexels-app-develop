import React, { useState } from "react";
import "./searchImage.css";

const SearchImage = ({ handleSearchImg }) => {
  const [search, setSearch] = useState("");
  const [mostrarError, setMostrarError] = useState(null)

  const handleChange = (e) => {
    if (e.target.value.length > 28 ){
        return
    }
    setSearch(e.target.value);
  };

  const validarBusqueda = (search) => {
    return /[a-z0-9]/.test(search);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMostrarError(false)
    if (!validarBusqueda(search)){
        setMostrarError(true);
        console.log();
        return;
    }
    handleSearchImg(search.trim());
  };

  return (
    <div className="search-container">
      <h2 className="search-title">Buscar imágen</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-container" >
          <input
          
            className="search-input"
            type="text"
            value={search}
            onChange={handleChange}
            placeholder="Busca una imagen"
          />
          <button type="submit" className="search-button">
          <i  
          className='search-button bx bx-sm bx-search-alt-2'></i>
          </button>
          
        </div>
      </form>
      {
          mostrarError && <p>La búsqueda debe tener letras y/o números</p>
      }
    </div>
  );
};

export default SearchImage;
