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
      <Navbar bg="primary" data-bs-theme="dark" expand={false} className="py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold d-flex align-items-center gap-2">
            <img
              src="/img/bandeira-bahia.png"
              alt="Bandeira da Bahia"
              height="28"
              className="rounded-1 border border-light"
            />
            SINDADOS-BA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="menu-principal" />
          <Navbar.Collapse id="menu-principal">
            <Nav className="me-auto">
              <Nav.Link href="#noticias">Notícias</Nav.Link>
              <Nav.Link href="#pisos">Pisos Salariais</Nav.Link>
            </Nav>

            {isLoggedIn ? (
              <div className="d-flex align-items-center gap-3 mt-3">
                <span className="text-white">Olá, {userProfile.nome}</span>
                <Button variant="outline-light" onClick={sair}>Sair</Button>
              </div>
            ) : (
              <div className="d-flex gap-2 mt-3">
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
