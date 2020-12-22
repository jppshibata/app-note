import React, { useContext, useReducer } from 'react';
import Nav from './components/nav';
import AddNote from './components/addNote';
import NoteList from './components/noteList';
import EditNote from './components/editNote';
import NotesContext from './context';
import notesReducer from './reducer';

function App() {
  const initialState = useContext(NotesContext);
  const [state, dispatch] = useReducer(notesReducer, initialState);
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Nav />
      {state.currNote === null ? (
        <div>
          <AddNote />
          <NoteList />
        </div>
      ) : (
        <EditNote />
      )}
    </NotesContext.Provider>
  );
}

export default App;