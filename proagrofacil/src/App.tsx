
import { Header } from "./components/header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";
import { Table } from "./components/reportTable";
import { NewRegistrationModal } from "./components/NewRegistrationModal";
import { NewSearchModal } from "./components/NewSearchModal";

Modal.setAppElement('#root');

export function App() {

  const [isNewUserOpen, setIsNewUserOpen] = useState(false);

  function handleOpenNewUserModal() {
    setIsNewUserOpen(true);
  }
  
  function handleCloseNewUserModal(){
    setIsNewUserOpen(false); 
  }
  
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  function handleOpenSearchModal() {
    setIsSearchOpen(true);
  }
  
  function handleCloseSearchModal(){
    setIsSearchOpen(false);
  }

  return (
    <>
      <Header />
      
      <Table 
      onOpenNewUserModal={handleOpenNewUserModal}
      onOpenSearchModal={handleOpenSearchModal}
      />

      <NewRegistrationModal 
      isOpen={isNewUserOpen}
      onRequestClose={handleCloseNewUserModal}
      />

      <NewSearchModal
      isOpen={isSearchOpen}
      onRequestClose={handleCloseSearchModal}
      />
      
      

      <GlobalStyle />
    </>
  );
}

