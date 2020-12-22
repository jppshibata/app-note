import React, { useState, useContext, useRef, useEffect } from 'react';
import NotesContext from '../context';

export default function AddNote() {
  const { state, dispatch } = useContext(NotesContext);
  const [value, setValue] = useState('');

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
      dispatch({ type: 'ADD_NOTE', payload: value });
      setValue('');
    }
  };

  return (
    <div className='note-form'>
      <form onSubmit={handleSubmit} action=''>
        <input type='text' ref={ref} onChange={handleChange} value={value} />
        <button>Adicionar nota</button>
      </form>
    </div>
  );
}