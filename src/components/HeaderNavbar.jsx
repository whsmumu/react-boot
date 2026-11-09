import { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

export default function HeaderNavbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  function entrar(nome) {
    setUserProfile({ nome });
    setIsLoggedIn(true);
  }

  function sair() {
    setUserProfile(null);
    setIsLoggedIn(false);
  }

  return (
    <header>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" className="py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">SINDADOS-BA</Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="me-auto">
              <Nav.Link href="#noticias">Notícias</Nav.Link>
              <Nav.Link href="#pisos">Pisos Salariais</Nav.Link>
            </Nav>

            {isLoggedIn ? (
              <div className="d-flex align-items-center gap-3 mt-3 mt-lg-0">
                <span className="text-white">Olá, {userProfile.nome}</span>
                <Button variant="outline-light" onClick={sair}>Sair</Button>
              </div>
            ) : (
              <div className="d-flex gap-2 mt-3 mt-lg-0">
                <Button variant="outline-light" onClick={() => entrar('Sócio Filiado')}>Login</Button>
                <Button variant="success" onClick={() => entrar('Novo Sócio')}>Seja Sócio</Button>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
