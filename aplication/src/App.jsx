import React from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

function App() {
  return (
    <>
      <Navbar />
      <section id="article">
        <Article
          title="Exemplo"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ratione ad quam laborum adipisci voluptates nesciunt itaque,
        distinctio excepturi iusto libero placeat natus labore modi
        architecto, beatae dolorum quia? Error?"
        />

        <Article
          title="Exemplo 2"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ratione ad quam laborum adipisci voluptates nesciunt itaque,
        distinctio excepturi iusto libero placeat natus labore modi
        architecto, beatae dolorum quia? Error?"
        />
        <Article
          title="Exemplo 3"
          provider="NASA"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        ratione ad quam laborum adipisci voluptates nesciunt itaque,
        distinctio excepturi iusto libero placeat natus labore modi
        architecto, beatae dolorum quia? Error?"
        />
      </section>
    </>
  );
}

export default App;
