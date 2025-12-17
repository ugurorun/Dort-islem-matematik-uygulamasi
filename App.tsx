import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import Stats from './pages/Stats';
import Settings from './pages/Settings';
import About from './pages/About';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-background-light dark:bg-background-dark flex justify-center items-start pt-0 sm:pt-4 pb-0 sm:pb-4">
      <div className="relative flex h-full min-h-[100dvh] sm:min-h-[800px] sm:max-h-[900px] w-full max-w-md flex-col bg-white dark:bg-[#101922] shadow-2xl sm:rounded-3xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:type" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;