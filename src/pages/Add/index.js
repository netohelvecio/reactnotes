import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Add({ history }) {
  function navigateBack() {
    history.push('/');
  }

  return (
    <Container>
      <form>
        <label htmlFor="title">Título</label>
        <input type="text" id="title" placeholder="Digite um título" />

        <label htmlFor="text">Texto</label>
        <textarea id="text" cols="30" rows="6" placeholder="Digite..." />

        <button type="submit">Adicionar</button>
        <button type="button" onClick={navigateBack}>
          Voltar
        </button>
      </form>
    </Container>
  );
}

Add.propTypes = {
  history: PropTypes.object.isRequired,
};
