import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <NavLink to="/" exact activeStyle={{ color: '#4EA5D9' }}>
        NOTES
      </NavLink>

      <NavLink to="/notescheck" exact activeStyle={{ color: '#4EA5D9' }}>
        NOTES CHECK
      </NavLink>
    </Container>
  );
}
