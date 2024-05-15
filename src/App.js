import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fetchStocks } from './redux/stocks/thunks/stock';
import Details from './components/pages/Details';
import Home from './components/pages/Home';
import Login from './components/login/login';
import Navigation from './navigation';
import Pass from './components/login/forget';
import Reset from './components/login/Reset';
import AboutUs from './components/login/aboutus';
const AppContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 250px;
  }
`;
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);

  return (
    <AppContainer>
      <AnimatePresence>
        <Navigation />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<Pass />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/aboutus" element={<AboutUs/>} />
        </Routes>
      </AnimatePresence>
    </AppContainer>
  );
};

export default App;
