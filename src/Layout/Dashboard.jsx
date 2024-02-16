import { Outlet } from 'react-router-dom';
import SideNav from '../Components/dashboard/SideNav/SideNav';
import { ThemeProvider } from '../Providers/ThemeContext';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    // Remove existing classes
    document.querySelector('html').classList.remove('dark', 'light');

    // Add the themeMode class
    document.querySelector('html').classList.add(themeMode);

    // Set scrollbar styles based on themeMode
    const scrollbarColor = themeMode === 'dark' ? 'black' : 'white';
    document.styleSheets[0].insertRule(
      `::-webkit-scrollbar-track { background: ${scrollbarColor}; border-radius: 10px; }`,
      0
    );
  }, [themeMode]);

  return (

    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex dark:bg-primary-dark h-screen">

        <div className="lg:w-[280px] min-h-screen dark:bg-primary-dark">
          <SideNav />
        </div>
        <div className="flex-1 md:mx-0">
          <Outlet />
        </div>

      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
