import React from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";


function CadastroCategoria(){
    return(
      <PageDefault>
        <h1>Cadastro de Vídeo </h1>
        <Link to="/cadastro/categoria">
          Ir para Home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;