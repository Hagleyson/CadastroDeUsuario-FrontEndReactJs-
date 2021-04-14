import React from "react";
import Main from "../template/Main";

export default function Home(props) {
  return (
    <Main icon="home" title="Início" subtitle="Projeto Cadastro de usuário">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sitema para exemplificar a construção de um cadastro desenvolvido em
        react
      </p>
    </Main>
  );
}
