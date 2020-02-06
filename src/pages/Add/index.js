import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import generateHash from 'random-hash';

import { Container } from './styles';

export default function Add({ history }) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [notes, setNotes] = useState([]);

  function usePrevious(value) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  }

  const prevNotes = usePrevious(notes);

  function navigateBack() {
    history.push('/');
  }

  useEffect(() => {
    function getNotesLocalStorage() {
      const response = localStorage.getItem('notes');

      if (response) {
        setNotes(JSON.parse(response));
      }
    }

    getNotesLocalStorage();
  }, []);

  useEffect(() => {
    function setNotesLocalStorage() {
      if (prevNotes !== notes) {
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    }

    setNotesLocalStorage();
  }, [notes]);

  function handleSubmit(e) {
    e.preventDefault();

    const id = generateHash({ length: 8 });

    setNotes(prev => [...prev, { id, title, text, check: false }]);
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
