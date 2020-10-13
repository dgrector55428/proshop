import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Header />
      <main className="my-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
