import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
flex-direction: column;
margin-top: 2REM;


h1{
  color: var(--text-title);
  font-size: 16px;
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
  margin-bottom: 1REM;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
    
  }
}
  table {
    width: 90%;
    border-spacing: 0 0.5rem;
    th {
      color: gray;
      text-align: left;
      line-height: 1.5;
      padding: 0 1rem;
    }

    td {
      padding: 1rem;
      border: 0;
      color: #7E8691;
      background: #f1f5f0;
      margin: 
      
      

    }
    
  }




`