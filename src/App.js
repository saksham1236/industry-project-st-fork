import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/home';
import Categories from './pages/CategoriesPage/categories';
import Organic from './components/Organic/organic';
import Hazardous from './components/Hazardous/hazardous';
import Solid from './components/Solid/solid';
import Liquid from './components/Liquid/liquid';
import Recyclable from './components/Recyclable/recyclable';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Home Route */}
          <Route path='/' element={<Home />}></Route>
          {/* Categories Route */}
          <Route path='/categories' element={<Categories />}></Route>
          <Route path='/categories/organic' element={<Organic />}></Route>
          <Route path='/categories/hazardous' element={<Hazardous />}></Route>
          <Route path='/categories/solid' element={<Solid />}></Route>
          <Route path='/categories/liquid' element={<Liquid />}></Route>
          <Route path='/categories/recyclable' element={<Recyclable />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
