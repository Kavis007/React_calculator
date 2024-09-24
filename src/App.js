import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NewCalculator from './NewCalculator';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NewCalculator/>}> </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
