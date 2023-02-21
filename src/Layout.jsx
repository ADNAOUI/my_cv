import { Container } from 'react-bootstrap';

import { Header } from './components/header/Header';
import { About, Experiences, Skills } from './partials';

const Layout = () => {

  return (
    <>
      <Header />

      <Container>
        <About />
        <Experiences />
        <Skills />
      </Container>
    </>
  )
}

export default Layout
