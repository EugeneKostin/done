import {
  Routes,
  Route,
} from 'react-router-dom';
import Create from './pages/Create';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Create />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
