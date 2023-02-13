import { useState } from 'react'
import { Container } from 'react-bootstrap';

import { Header } from './components/header/Header';
import { About } from './partials/About.partials';

const Layout = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Container>
        <About />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </Container>
    </>
  )
}

export default Layout
