import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TaskOverview from './pages/TaskOverview';
import Settings from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState(window.location.pathname);
  const [tasks, setTasks] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    function handlePopState() {
      setCurrentPage(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  function setPage(page) {
    setCurrentPage(page)
  };

  function handleChangeTheme(newTheme) {
    setTheme(newTheme);
  };

  function renderPage() {
    switch(currentPage) {
      case '/':
        return <Home tasks={tasks} setTasks={setTasks} />;
      case '/taskoverview':
        return <TaskOverview tasks={tasks} />;
      case '/settings':
        return <Settings theme={theme} onChangeTheme={handleChangeTheme} />;
      default:
        return <Home tasks={tasks} setTasks={setTasks} />;
    }
  };

  return (
    <div className="app">
      <Navbar setPage={setPage} />
      {renderPage()}
    </div>
  );
};

export default App;
