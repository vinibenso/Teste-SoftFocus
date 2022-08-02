import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'
import { FormEvent } from 'react';

interface NewSearchModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewSearchModal({ isOpen, onRequestClose }: NewSearchModalProps) {


  function handleCreateSearch(event: FormEvent) {
    event.preventDefault();

  }
  return (
    
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName={"modal-styles-search-overlay"}
      className="modal-styles-search-content"
    >
   
     
      <Container onSubmit={handleCreateSearch}>
      <button 
      type="button" 
      onClick={onRequestClose}
      className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar" />
      </button>

        <h1>CPF do produtor </h1>
        <input placeholder="Digite o CPF do produtor" />

        <button type="submit">
          Buscar
        </button>

        

      </Container>
    </Modal>
  )
}