import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
          <h1>Página Inicial</h1>
          <Link to="/products">Produtos</Link>
        </div>
      );
}

export default Home;