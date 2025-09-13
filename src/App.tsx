import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GettingStarted from './pages/GettingStarted';
import Demo from './pages/Demo';
import AppBuilder from './pages/AppBuilder';
import AcceptQuote from './pages/AcceptQuote';
import ModifyNeeds from './pages/ModifyNeeds';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/getting-started" element={<GettingStarted />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/app-builder" element={<AppBuilder />} />
            <Route path="/accept-quote" element={<AcceptQuote />} />
            <Route path="/modify-needs" element={<ModifyNeeds />} />
            <Route path="/service/:serviceId" element={<ServiceDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
