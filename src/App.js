import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavbarComponent from './Components/NavbarComponent';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Success from './Pages/Success';
import Cancel from './Pages/Cancel';
import Store from './Pages/Store';

function App() {
  return (
    <Container>
    <NavbarComponent></NavbarComponent>
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
