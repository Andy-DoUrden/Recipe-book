import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecipeDetail from './pages/RecipeDetail/RecipeDetail';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
    </Routes>
  </BrowserRouter>
);

export default App;
