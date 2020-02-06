import React from 'react';
import { MdAdd, MdModeEdit, MdCheck } from 'react-icons/md';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import { Container, Note } from './styles';

export default function List({ history }) {
  function navigateToAdd() {
    history.push('/add');
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

        <ul>
          <Note>
            <span>Titúlo Teste</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
              quaerat vero ipsa ad adipisci consequuntur ut voluptates, culpa
              assumenda neque repellat harum nemo rem maiores ea! Asperiores, et
              inventore!
            </p>

            <div>
              <button type="button">
                <MdModeEdit color="#5f7dec" size={20} />
              </button>
              <button type="button">
                <MdCheck color="#218f2a" size={20} />
              </button>
            </div>
          </Note>

          <Note>
            <span>Titúlo Teste</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
              quaerat vero ipsa ad adipisci consequuntur ut voluptates, culpa
              assumenda neque repellat harum nemo rem maiores ea! Asperiores, et
              inventore!
            </p>

            <div>
              <button type="button">
                <MdModeEdit color="#5f7dec" size={20} />
              </button>
              <button type="button">
                <MdCheck color="#218f2a" size={20} />
              </button>
            </div>
          </Note>

          <Note>
            <span>Titúlo Teste</span>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id odit
              quaerat vero ipsa ad adipisci consequuntur ut voluptates, culpa
              assumenda neque repellat harum nemo rem maiores ea! Asperiores, et
              inventore!
            </p>

            <div>
              <button type="button">
                <MdModeEdit color="#5f7dec" size={20} />
              </button>
              <button type="button">
                <MdCheck color="#218f2a" size={20} />
              </button>
            </div>
          </Note>
        </ul>
      </Container>
    </>
  );
}

List.propTypes = {
  history: PropTypes.object.isRequired,
};
