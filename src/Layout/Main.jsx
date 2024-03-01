import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Shared/Navbar/Navbar';
import Footer from '../Components/Shared/Footer/Footer';
// import TopButton from '../Components/Shared/TopButton/TopButton';
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
    <div>
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="dark:bg-primary-dark bg-[#fff]">
          <Navbar />
          <Outlet></Outlet>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Main;
