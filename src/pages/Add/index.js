import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Add({ history }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  function navigateBack() {
    history.push('/');
  }

  function handleSubmit() {}

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          id="title"
          placeholder="Digite um título"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <label htmlFor="text">Texto</label>
        <textarea
          id="text"
          cols="30"
          rows="6"
          placeholder="Digite..."
          value={text}
          onChange={e => setText(e.target.value)}
        />

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
