
import './App.css';
import Header from './component/Header';
import Home from './component/Home';
import { Routes, Route } from "react-router-dom"
import Register from './component/Register';
import Edit from './component/Edit';
import Info from './component/Info';

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/info/:id' element={<Info />} />

      </Routes>
    </div>
  );
}

export default App;
