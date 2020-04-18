import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import api from '../../../services/api';

export default class NewProduct extends Component {
  state = {
    title: '',
    description: '',
    url: ''
  };

  handleInputChange = (e) => this.setState({
    [e.currentTarget.name]: e.currentTarget.value
  });

  create = async () => {
    await api.post('/products', this.state)
      .then(function () {
        window.location.replace("http://localhost:3000/");
      })
      .catch(function (error) {
        alert(error);
      });
  };

  render() {
    return (
      <div className="new-product">
        <input name="title" placeholder="Título" onChange={this.handleInputChange}></input>
        <input name="description" placeholder="Descrição" onChange={this.handleInputChange}></input>
        <input name="url" placeholder="URL" onChange={this.handleInputChange}></input>
        <Link onClick={this.create} className="newProduct"> Cadastrar produto</Link>
        <Link className="prevPage" to={'/'}> Voltar</Link>
      </div >
    );
  }
}