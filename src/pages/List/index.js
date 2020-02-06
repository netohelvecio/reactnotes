import React, { useState, useEffect } from 'react';
import { MdAdd, MdModeEdit, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container, Note } from './styles';

export default function List({ history }) {
  const [notes, setNotes] = useState([]);

  function navigateToAdd() {
    history.push('/add');
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

  return (
    <>
      <Header />

      <Container>
        <header>
          <button type="button" onClick={navigateToAdd}>
            <MdAdd color="#fff" size={20} /> Criar note
          </button>
        </header>

        <ul>
          {notes.map(note => (
            <Note key={note.id}>
              <span>{note.title}</span>

              <p>{note.text}</p>

              <div>
                <button type="button">
                  <MdModeEdit color="#5f7dec" size={20} />
                </button>
                <button type="button">
                  <MdCheck color="#218f2a" size={20} />
                </button>
              </div>
            </Note>
          ))}
        </ul>
      </Container>
    </>
  );
}

List.propTypes = {
  history: PropTypes.object.isRequired,
};
