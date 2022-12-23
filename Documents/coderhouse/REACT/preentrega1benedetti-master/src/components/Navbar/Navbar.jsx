import "./Navbar.css";
import * as React from 'react';
import Button from '@mui/material/Button';
import Cartwidget from "../Cartwidget/Cartwidget";


function Navbar() {
 return (

    <nav>
      <ul>
        <a href="">
          <Button variant="contained">inicio</Button>
        </a>
        <a href="">
          <Button variant="contained">instrumentos de cuerdas</Button>
        </a>
        <a href="">
          <Button variant="contained">Percusion</Button>
        </a>

        <a href="">
          <Button variant="contained">Vientos</Button>
        </a>

        <a href="">
          <Button variant="contained">Accesorios</Button>
        </a>
      </ul>
      <Button variant="contained"> <Cartwidget/> </Button>
    </nav>
  );
}

export default Navbar;
