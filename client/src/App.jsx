import { Routes, Route } from 'react-router-dom';
import { BuyCredits, Dashboard, Home } from './pages';
import { Nav, Footer } from './components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <ToastContainer position="bottom-right">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="buy-credits" element={<BuyCredits />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </ToastContainer>
    </>
  );
};

export default App;
