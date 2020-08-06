import React from "react";
import {Link} from "react-router-dom"
import Logo from "../../assets/img/Logo.png";
import "./Menu.css"
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button/index"


function Menu(){
    return(
        <nav className="Menu">
            <Link to="/" >
            <img className="Logo" src={Logo} alt="logo mariflix"/>
            </Link>
            <Button as= {Link} className="ButtonLink" to="/cadastro/video">
                Novo Vídeo
            </Button>

        </nav>

    )
}


export default Menu;