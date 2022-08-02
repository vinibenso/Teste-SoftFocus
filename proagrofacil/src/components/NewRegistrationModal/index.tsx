import { useState } from 'react';
import Modal from 'react-modal'
import { Container } from './styles';
import closeImg from '../../assets/close.svg';
interface NewRegistrationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewRegistrationModal({ isOpen, onRequestClose }: NewRegistrationModalProps) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState(0);
  const [locale, setLocale] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState(new Date());
  const [eventDescription, setEventDescription] = useState('');


  function handleCreateNewRegistration() {

  }

  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"modal-styles-registration-overlay"}
      className="modal-styles-registration-content"
    >

      <Container onSubmit={handleCreateNewRegistration}>
        <button
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
          <img src={closeImg} alt="Fechar" />
        </button>

        <h1>Nome</h1>
        <input
          placeholder="Nome do produtor"
          value={name}
          onChange={event => setName(event.target.value)} />

        <h1>E-mail</h1>
        <input
          placeholder="Email do produtor"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <h1>CPF</h1>
        <input
          placeholder="Cpf do produtor"
          value={cpf}
          onChange={event => setCpf(Number(event.target.value))}
        />

        <h1>Localização</h1>
        <input
          placeholder="Localização do produtor"
          value={locale}
          onChange={event => setLocale(event.target.value)}
        />

        <h1>Tipo da Lavoura</h1>
        <input
          placeholder="Tipo da lavoura"
          value={type}
          onChange={event => setType(event.target.value)}
        />

        <h1>Data da colheita</h1>
        <input
          type="date"
          value={date.toISOString().split("T")[0]}
          onChange={event => {
            const newDate = new Date(event.target.value);

            if (!isNaN(newDate.getTime())) {
              setDate(newDate);
            }
          }}
        />

        <h1>Evento Ocorrido</h1>
        <select
          name="select"
          value={eventDescription}
          onChange={event => setEventDescription(event.target.value)}
        >
          <option value="valor1" >---------</option>
          <option value="valor2">CHUVA EXCESSIVA</option>
          <option value="valor3">GEADA</option>
          <option value="valor4">SECA</option>
          <option value="valor5">VENDAVAL</option>
          <option value="valor6">RAIO</option>



        </select>

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>

  );
}
