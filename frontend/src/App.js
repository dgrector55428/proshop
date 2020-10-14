import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./views/Home/Home";
import Product from "./views/Product/Product";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-4">
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={Product} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
