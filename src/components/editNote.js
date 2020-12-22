import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

export default function EditNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState(state.currNote.text);

  let ref = useRef();

  useEffect(() => {
    ref.current.focus();
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (value.trim() === '') {
      alert('Não pode adicionar uma nota vazia');
    } else {
      dispatch({ type: 'UPDATE_NOTE', payload: value });
      setValue('');
    }
  };

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action=''>
        <textarea
          ref={ref}
          onChange={handleChange}
          value={value}
          name=''
          id=''
          cols='30'
          rows='10'
        />
        <div style={{ textAlign: 'right' }}>
          <button>Atualizar Nota</button>
        </div>
      </form>
    </div>
  );
}