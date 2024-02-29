import { Outlet } from 'react-router-dom';
import SideNav from '../Components/dashboard/SideNav/SideNav';
import { ThemeProvider } from '../Providers/ThemeContext';
import { useEffect, useState } from 'react';
import PageTitle from '../Features/PageTitle/PageTitle';

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
    // const scrollbarColor = themeMode === 'dark' ? 'black' : 'white';
    // document.styleSheets[0].insertRule(
    //   `::-webkit-scrollbar-track { background: ${scrollbarColor}; border-radius: 10px; }`,
    //   0
    // );
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <PageTitle title="Property Hunter || Dashboard"></PageTitle>
      <div className="flex dark:bg-primary-dark relative items-start align-top">
        <div className="lg:w-[280px] z-50 min-h-screen sticky top-0 dark:bg-primary-dark bg-[#e5ebee]">
          <SideNav />
        </div>
        <div className="flex-1 md:mx-0 dark:bg-[#000509] min-h-screen">
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Dashboard;
