import styled from "styled-components"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Header from "./static/Header"
import Footer from "./static/Footer"

const App = () => {

  return (
    <Container>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} ></Route>
          </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  )
}

export default App

const Container = styled.div``

// const Wrapper = styled.div``
