import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext)
}

// const App = () => {
//   const [themeMode, setThemeMode] = useState('light');

//   const darkTheme = () => {
//     setThemeMode('dark');
//   };

//   const lightTheme = () => {
//     setThemeMode('light');
//   };

//   useEffect(() => {
//     document.querySelector('html').classList.remove('dark', 'light');
//     document.querySelector('html').classList.add(themeMode);
//   }, [themeMode]);


{/* <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}> */}
{/* <RouterProvider router={router} /> */}
{/* </ThemeProvider> */}