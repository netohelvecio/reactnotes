import React, { useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container, Note } from './styles';

export default function List({ history }) {
  const [notesWithFilter, setNotesWithFilter] = useState([]);

  function navigateToAdd() {
    history.push('/add');
  }

  function getNotesLocalStorage() {
    const response = localStorage.getItem('notes');

    if (response) {
      const data = JSON.parse(response);

      const dataWithFilter = data.filter(item => item.check === true);

      setNotesWithFilter(dataWithFilter);
    }
  }

  useEffect(() => {
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

        {!notesWithFilter.length ? (
          <div>
            <span>Sem notes marcadas como feitas!</span>
          </div>
        ) : (
          <ul>
            {notesWithFilter.map(note => (
              <Note key={note.id}>
                <span>{note.title}</span>

                <p>{note.text}</p>
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
