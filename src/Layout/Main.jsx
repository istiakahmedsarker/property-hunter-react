import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';
import TopButton from '../Components/Shared/TopButton/TopButton';
import { ThemeProvider } from '../Providers/ThemeContext';
import { useEffect, useState } from 'react';

const Main = () => {
  const [themeMode, setThemeMode] = useState('light');

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const lightTheme = () => {
    setThemeMode('light');
  };

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <div>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <Navbar />
        <Outlet></Outlet>
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Main;
