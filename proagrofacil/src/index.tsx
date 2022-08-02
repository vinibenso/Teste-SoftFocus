import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/tables', () => {
      return [
        {
        id: 1,
        name: 'Vinicius',
        cpf: 15415616516,
        email: 'vinicius@gmail.com',
        location: 15151151815,
        type: 'soja',
        date: new Date(),
        event: 'seca',
        }
      ]
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


