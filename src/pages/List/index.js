import React, { useState, useEffect } from 'react';
import { MdAdd, MdModeEdit, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Header from '../../components/Header';

import { Container, Note } from './styles';

export default function List({ history }) {
  const [notes, setNotes] = useState([]);
  const [notesWithFilter, setNotesWithFilter] = useState([]);

  function navigateToAdd() {
    history.push('/add');
  }

  function navigateToEdit(note) {
    history.push('/edit', note);
  }

  function getNotesLocalStorage() {
    const response = localStorage.getItem('notes');

    if (response) {
      const data = JSON.parse(response);

      const dataWithFilter = data.filter(item => item.check === false);

      setNotesWithFilter(dataWithFilter);
      setNotes(data);
    }
  }

  useEffect(() => {
    getNotesLocalStorage();
  }, []);

  function handleCheckNote(id) {
    const newNotes = notes;
    const index = newNotes.findIndex(n => n.id === id);

    newNotes[index].check = true;

    setNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(notes));

    getNotesLocalStorage();

    toast.success('Note marcado como feito!');
  }

  return (
    <>
      <Header />

      <Container>
        <header>
          <button type="button" onClick={navigateToAdd}>
            <MdAdd color="#fff" size={20} /> Criar note
          </button>
        </header>

        {!notesWithFilter.length ? (
          <div>
            <span>Sem notes cadastradas</span>
          </div>
        ) : (
          <ul>
            {notesWithFilter.map(note => (
              <Note key={note.id}>
                <span>{note.title}</span>

                <p>{note.text}</p>

                <div>
                  <button type="button" onClick={() => navigateToEdit(note)}>
                    <MdModeEdit color="#5f7dec" size={20} />
                  </button>
                  <button type="button">
                    <MdCheck
                      color="#218f2a"
                      size={20}
                      onClick={() => handleCheckNote(note.id)}
                    />
                  </button>
                </div>
              </Note>
            ))}
          </ul>
        )}
      </Container>
    </>
  );
}

List.propTypes = {
  history: PropTypes.object.isRequired,
};
