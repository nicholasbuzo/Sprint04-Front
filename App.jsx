import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Aqui você vai adicionar suas rotas, por exemplo: */}
          <Route path="/" element={<Home />} />
          <Route path="/escanear" element={<Escanear />} />
          <Route path="/manutencoes" element={<Manutencoes />} />
          <Route path="/conta" element={<Conta />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 