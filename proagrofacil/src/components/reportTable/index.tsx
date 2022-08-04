import { useContext, } from "react"
import { UsersContext } from "../../UserContext";
import { Container } from "./styles"

interface TableProps {
  onOpenNewUserModal: () => void;
  onOpenSearchModal: () => void;
}

export function Table({ onOpenNewUserModal, onOpenSearchModal }: TableProps) {

  const {users} = useContext(UsersContext);

  return (
    <Container>


      <button type='button' onClick={onOpenNewUserModal}>
        CADASTRAR NOVO
      </button>

      <button type='button' onClick={onOpenSearchModal}>
        BUSCAR
      </button>

      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cpf</th>
            <th>Localização</th>
            <th></th>
            <th>Tipo da Lavoura</th>
            <th>Data da Colheita</th>
            <th>Evento Ocorrido</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => {
            return (
              <tr key={user.cpf}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.cpf}</td>
                <td>{user.latitude}</td>
                <td>{user.longitude}</td>
                <td>{user.type}</td>
                <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(user.date))}</td>
                <td>{user.eventDescription}</td>
              </tr>
            )
          })}
        </tbody>
      </table>


    </Container>



  )
}