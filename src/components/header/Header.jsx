import { Container, Nav, Navbar } from 'react-bootstrap';

export const Header = () => {
  const arrayOfLists = Array.from(Array(10)).map((_, index) => (
    <li key={index}></li>
  ))

  return (
    <>
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <section className="banner">
        <div className="banner__background d-flex flex-column">
          <div className="banner__background__title">
            <h1 variant='h1'>Farid</h1>
          </div>

          <div className='d-flex banner__background__animated'>
            <ul className="circles">
              {arrayOfLists}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
