import React from 'react';
import RouteConfig from './routes/RouteConfig';
import { Header } from './components';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className="p-4">
        <RouteConfig />
      </main>
    </>
  );
};

export default App;