import React, { useEffect, useState } from "react";
import "./UserCrud.css";
import axios from "axios";
import Main from "../template/Main";

const headerProps = {
  icon: "users",
  title: "Usuário",
  subtitle: "Cadastro de usuarios: Incluir, Listar, Alterar e Excluir",
};
const baseUrl = "https://hagleysonser.herokuapp.com/users";
const initialState = {
  user: { name: "", email: "" },
  list: [],
};
export default function UserCrud(props) {
  const [state, setState] = useState(initialState);

  function clear() {
    setState({ ...state, user: initialState.user });
  }

  function getUpdateList(user, add = true) {
    const list = state.list.filter((u) => u.id !== user.id);
    //colocar um dado na primeira posição do array
    if (add) list.unshift(user);
    return list;
  }

  function updateField(event) {
    const user = { ...state.user };
    user[event.target.name] = event.target.value;
    setState({ ...state, user: user });
  }

  function save() {
    const user = state.user;
    const method = user.id ? "put" : "post";
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl;
    axios[method](url, user).then((resp) => {
      const list = getUpdateList(resp.data);
      setState({ user: initialState.user, list });
    });
  }
  function load(user) {
    setState({ ...state, user: user });
  }
  function remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then((resp) => {
      const list = getUpdateList(user, false);
      setState({ ...state, list: list });
    });
  }

  useEffect(() => {
    axios(baseUrl).then((resp) => {
      setState({ ...state, list: resp.data });
    });
  }, []);

  return (
    <Main {...headerProps}>
      Cadastro de Usuário
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>Nome</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={state.user.name}
                onChange={(e) => updateField(e)}
                placeholder="Digite o nome..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label>E-mail</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={state.user.email}
                onChange={(e) => updateField(e)}
              />
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <button onClick={save} className="btn btn-primary">
                Salvar
              </button>
              <button onClick={clear} className="btn btn-secondary ml-2">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>ID: </th>
            <th>Nome: </th>
            <th>E-mail: </th>
            <th>Ações: </th>
          </tr>
        </thead>
        <tbody>
          {state.list.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="buttonsList">
                  <button
                    className="btn btn-warning"
                    onClick={() => load(user)}
                  >
                    <i className="fa fa-pencil"></i>
                  </button>
                  <button
                    className="btn btn-danger ml-2"
                    onClick={() => remove(user)}
                  >
                    <i className="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Main>
  );
}
