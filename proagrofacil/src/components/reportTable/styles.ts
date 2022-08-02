import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;


h1{
  color: var(--text-title);
  font-size: 16px;
  

 
}
input {
  color: var(--text-area);
  border: 1px solid var(--text-area);
  width: 30rem;
  height: 2rem;
  margin-bottom: 1.5rem;
  
}

select {
  width: 30rem;
  margin-bottom: 2rem;
}

button {
  width: 30rem;
  padding: 0 1.5rem;
  height: 3rem;
  border-radius: 5px;
  background-color: var(--green);
  border: none;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  margin-top: 10px;

  :hover {
    opacity: 0.8;
    
  }
}



`