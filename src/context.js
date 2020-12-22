import React from 'react';

const NotesContext = React.createContext(
    {
        currNote:null,
        notes:[
            {id: 1, text: 'coisas a fazer hoje'},
            {id: 2, text: 'estudos react'},
            {id: 3, text: 'Compras para a ceia de natal'}
        ]
    });

    export default NotesContext;