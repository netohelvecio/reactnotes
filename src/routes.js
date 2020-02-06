import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import List from './pages/List';
import ListCheck from './pages/ListCheck';
import Add from './pages/Add';
import Edit from './pages/Edit';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/notescheck" component={ListCheck} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
