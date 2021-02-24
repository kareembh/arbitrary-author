import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from "../components/navMenu/navMenu"
import Footer from "../components/footer/footer"
import { Container } from 'react-bootstrap';


// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <NavMenu></NavMenu>
      <Container>
      
      </Container>
      <Footer></Footer>
    </main>
  )
}

export default IndexPage
