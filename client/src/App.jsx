import { Routes, Route } from 'react-router-dom';
import { BuyCredits, Dashboard, Home } from './pages';
import { Nav, Footer } from './components';

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="buy-credits" element={<BuyCredits />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
