import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { Container } from './styles';

export default function Edit({ location, history }) {
  const [title, setTitle] = useState(location.state.title);
  const [text, setText] = useState(location.state.text);
  const [notes, setNotes] = useState([]);

  function navigateBack() {
    history.push('/');
  }

  function getNotesLocalStorage() {
    const response = localStorage.getItem('notes');

    if (response) {
      setNotes(JSON.parse(response));
    }
  }

  useEffect(() => {
    getNotesLocalStorage();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const newNotes = notes;
    const index = newNotes.findIndex(n => n.id === location.state.id);

    newNotes[index].title = title;
    newNotes[index].text = text;

    setNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(notes));

    getNotesLocalStorage();

    toast.success('Note atualizado com sucesso!');

    history.push('/');
  }

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

        <button type="submit">Salvar</button>
        <button type="button" onClick={navigateBack}>
          Cancelar
        </button>
      </form>
    </Container>
  );
}

Edit.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
