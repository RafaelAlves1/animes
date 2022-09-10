import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from '.';
import Details from '../Pages/Details';
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Perfil from '../Pages/Perfil';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="/anime-details/:animeId" element={<PrivateRoutes />}>
          <Route path="/anime-details/:animeId" element={<Details />} />
        </Route>
        <Route path="/perfil" element={<PrivateRoutes />}>
          <Route path="/perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
