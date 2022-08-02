import { useEffect, useState } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"
import Modal from 'react-modal';

export function Table() {

useEffect(() => {
  api.get('/tables')
  .then(response => console.log(response.data))
}, []);

const [isNewUserOpen, setIsNewUserOpen] = useState(false);

function handleOpenNewUserModal() {
  setIsNewUserOpen(true);
}

function handleCloseNewUserMOdal(){
  setIsNewUserOpen(false); 
}

const [isSearchOpen, setIsSearchOpen] = useState(false);

function handleOpenSearchModal() {
  setIsSearchOpen(true);
}

function handleCloseSearchMOdal(){
  setIsSearchOpen(false);
}

  return (
    <Container>
      

      <button type='button' onClick={handleOpenNewUserModal}>
        CADASTRAR NOVO 
      </button>

      <button type='button' onClick={handleOpenSearchModal}>
        BUSCAR
      </button>

      <Modal 
      isOpen={isNewUserOpen}
      onRequestClose={handleCloseNewUserMOdal}
      >
      <h1>Nome</h1>
      <input placeholder="Nome do produtor" />

      <h1>E-mail</h1>
      <input placeholder="Email do produtor" />

      <h1>CPF</h1>
      <input placeholder="Cpf do produtor" />

      <h1>Localização</h1>
      <input placeholder="Localização do produtor" />

      <h1>Tipo da Lavoura</h1>
      <input placeholder="Tipo da lavoura" />

      <h1>Data da colheita</h1>
      <input placeholder="Data da colheita" />

      <h1>Evento Ocorrido</h1>
      <select name="select">
        <option value="valor1" select="true" >---------</option>
        <option value="valor2">CHUVA EXCESSIVA</option>
        <option value="valor3">GEADA</option>
        <option value="valor4">SECA</option>
        <option value="valor5">VENDAVAL</option>
        <option value="valor6">RAIO</option>
  
      </select>
      </Modal>
      
      <Modal 
      isOpen={isSearchOpen}
      onRequestClose={handleCloseSearchMOdal}
      >

        <h2>Buscar </h2>

      </Modal>

    </Container>

  )
}