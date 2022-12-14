import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background:#D1CACE;
    --green: #228B22;

    --text-title: #363f5f;
    --text-body: #969CB3
  }

 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }

 html {
   @media(max-width: 1080px) {
    font-size: 93.75%;
   }
   @media(max-width: 720px) {
    font-size: 87.5%
  }
 }


 body {
  background: var(--background);
  -webkit-font-smoothing: antialiased;

 }

 bottom {
  cursor: pointer;
 }

 [disabled] {
  opacity:0.5;
  cursor: not-allowed;
 }

body, input, textarea, button {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
}

h1, h2, h3, h4, h6, strong {
font-weight: 600;
}


.modal-styles-registration-overlay, .modal-styles-search-overlay {
  
background: rgba(0,0,0,0.5);
position: fixed;
top: 0;
bottom: 0;
right: 0;
left: 0;

display: flex;
align-items: center;
justify-content: center;

}
.modal-styles-registration-content, .modal-styles-search-conten {

  
background: var(--background);
width: 100%;
max-width: 576px;
padding: 3rem;
position: relative;
display: flex;
align-items: center;
flex-direction: column;

}

.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1rem;
  border: 0;
  background: transparent;
}

`