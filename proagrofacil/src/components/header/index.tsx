import logo from './logo.png'
import { Container, Content } from './styles'

export function Header() {
  return (
   <Container>
    <Content>
    <img src={logo} alt="" />

    <h1>ProAgro Fácil</h1> 
    </Content>
   </Container>
  )
}