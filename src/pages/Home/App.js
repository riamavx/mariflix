import React from 'react';
import Menu from "../../components/Menu"
import dadosIniciais from "../../components/data/dados_iniciais.json";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
// import Footer from "./components/Footer"


function Home() {
  return (
    <div style={{background: "#414141"}}>
      <Menu/>
      <BannerMain
      videoTitle ={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Vídeos Leves"}
      />


      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />
      
      <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />

<Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />

<Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />
    </div>
  );
}

export default Home;
