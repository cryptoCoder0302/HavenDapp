import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import Main from './components/Main';
import Vaults from './pages/Vaults';
import Approve from './pages/Approve';
import './sass/global.scss';
import './App.css';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className="App dark-mode">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/app" element={<Main /> }>
              <Route path="vaults" element={<Vaults />} />
              <Route path="approve" element={<Approve />} />
            </Route>
          </Routes>  
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
