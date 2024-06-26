import React from 'react';
import { useLocation } from 'react-router-dom';
import RouteConfig from './routes/RouteConfig';
import { Header } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './components/Menu';

const App: React.FC = () => {
  const location = useLocation();
  const noMenuRoutes = ['/login', '/register'];

  return (
    <div className="bg-[#121217] h-full max-h-screen fixed w-full">
      <Header />
      <div className="flex w-full">
        {!noMenuRoutes.includes(location.pathname) && <Menu />}
        <RouteConfig />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
