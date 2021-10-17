import React from "react";
import Logo from "./Cartwidget";
import '../App.css'

export const Welcome = () =>{
    return(
    <header>
        <Logo />
        <div style={{fontSize: '50px'}}>Nice Things</div>
    </header>
    );
};

export default Welcome;