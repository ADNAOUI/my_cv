import { useState } from 'react'
import { Container } from 'react-bootstrap';

import { Header } from './components/header/Header';
import { About, Experiences, Skills } from './partials';

const Layout = () => {
  const [count, setCount] = useState(0)

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
