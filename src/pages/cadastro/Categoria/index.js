import React, {useState} from "react";
import { Link } from "react-router-dom";
import PageDefault from "../../../components/PageDefault";


function CadastroCategoria(){
  let [nomeDaCategoria, setNomeDaCategoria]= useState("Filmes");


    return(
      <PageDefault>
        <h1>Cadastro Categoria: {nomeDaCategoria} </h1>

        <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
            value= {nomeDaCategoria}
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>
          <Link to="/">
          Ir para Home
          
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;