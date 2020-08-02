import React from "react";
import DefaultPage from "../../../components/DefaultPage";
import { Link } from "react-router-dom";

function RegisterCategory() {
  return (
    <DefaultPage>
      <h1>Cadastro de Categoria</h1>
      <Link to="/">Ir para Home</Link>
    </DefaultPage>
  );
}

export default RegisterCategory;
