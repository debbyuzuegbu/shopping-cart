import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './Pages/success';
import cancel from './Pages/cancel';
import Store from './Pages/Store';

function App() {
  return (
    <Container>
    <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
      <Route index element={<Store/>} />
      <Route path ="success"index element={<Success />} />
      <Route path ="cancel"index element={<Cancel/>} />
    </Routes>
    </BrowserRouter>
    </Container>
  );
}

export default App;
