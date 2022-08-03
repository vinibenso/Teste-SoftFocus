import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models:{
    user: Model,
  },

  seeds(server) {
    server.db.loadData({
      users: [{
        id: 1,
        name: 'Vinicius',
        email: "vinibenso@gmail.com",
        cpf: "123456789",
        locale: "1651561859",
        type: "soja",
        date: new Date("2022-08-03 09:00:00"),
        eventDescription: "seca"
      }]
    })
  },


  routes() {
    this.namespace = 'api';

    this.get('/registration', () => {
      return this.schema.all('user')
    })
    
    this.post('/registration', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('user', data);
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


