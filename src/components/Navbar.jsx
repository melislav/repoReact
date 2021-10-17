import React from "react";
import '../App.css'

export const Navbar = () =>{
    return(
    <header>
      <nav className="navbar">
        <p className="h1">Inicio</p>
        <p className="h1">E-Shop</p>
        <p className="h1">Nosotros</p>
        <p className="h1">Cursos</p>
      </nav>
    </header>
    );
};

export default Navbar;

/*Crear una barra de menu simple que contenga Brand (nombre de la tíenda) 
Un listado de categorias clickeables{p}
Crear un componente CartWidget.js con un icono y ubicarlo en el NavBar

Crear componente ItemListContainer.js con un prop greeting y muestre el msj dentro del contenedor con el styling integrado 

Crear componente ILC. Importar a App.js y abajo de NavBAr.js*/

