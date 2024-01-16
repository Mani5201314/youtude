import './App.css';
import Categories from './components/categories';
import Navbar from './components/navbar';
import Videos from './components/videos';
import Addvideos from './components/Addvideos';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      <Categories />
      <Routes>
      <Route element={ <Videos />} path='/'></Route>
      <Route element={<Addvideos />} path='/addvideo'/>
      </Routes>
      
      </BrowserRouter>
 
    </div>
  );
}

export default App;
