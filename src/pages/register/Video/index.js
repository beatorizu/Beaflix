import React from "react";
import DefaultPage from "../../../components/DefaultPage";
import { Link } from "react-router-dom";

function RegisterVideo() {
  return (
    <DefaultPage>
      <h1>Cadastro de Vídeo</h1>
      <Link to='/register/category'>
        Cadastrar Categoria
      </Link>
    </DefaultPage>
  );
}

export default RegisterVideo;
