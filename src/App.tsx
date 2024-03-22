import { Button, Container, Form, Input } from "./style"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
  <Container>
      <Form> 
        <Input placeholder="e-mail"></Input>
        <Input placeholder ="senha" type="passoword"></Input>
        <Button>Entrar</Button> 
      </Form>
      </Container>
      </ThemeProvider>
  )      
}