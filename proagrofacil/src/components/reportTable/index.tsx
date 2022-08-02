import { useEffect, } from "react"
import { api } from "../../services/api";
import { Container } from "./styles"


interface TableProps {
  onOpenNewUserModal: () => void;
  onOpenSearchModal: () => void;
}

export function Table({onOpenNewUserModal, onOpenSearchModal}: TableProps) {

useEffect(() => {
  api.get('/registration')
  .then(response => console.log(response.data))
}, []);



  return (
    <Container>
      

      <button type='button' onClick={onOpenNewUserModal}>
        CADASTRAR NOVO 
      </button>

      <button type='button' onClick={onOpenSearchModal}>
        BUSCAR
      </button>
      

 

    </Container>

  )
}