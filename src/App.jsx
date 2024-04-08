import React  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home'; 


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/itrium-demo" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
