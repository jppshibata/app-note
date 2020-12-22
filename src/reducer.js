import { v4 as uuidv4 } from 'uuid';


export default function reducer(state, action) {
  switch (action.type) {
    case 'ADD_NOTE':
      const newNote = {
        id: uuidv4,
        text: action.payload
      };

      const addedNotes = [...state.notes, newNote];

      return {
        ...state,
        notes: addedNotes
      };
    case 'DELETE_NOTE':
      const deletedNotes = state.notes.filter(
        note => note.id !== action.payload
      );

      return {
        ...state,
        notes: deletedNotes
      };
    case 'SET_CURRENT_NOTE':
      return {
        ...state,
        currNote: action.payload
      };
    case 'UPDATE_NOTE':
      const updatedNote = {
        ...state.currNote,
        text: action.payload
      };

      const updatedNotesIndex = state.notes.findIndex(
        note => note.id === state.currNote.id
      );

      const updatedNotes = [
        ...state.notes.slice(0, updatedNotesIndex),
        updatedNote,
        ...state.notes.slice(updatedNotesIndex + 1)
      ];

      return {
        currNote: null,
        notes: updatedNotes
      };
    default:
      return state;
  }
}

