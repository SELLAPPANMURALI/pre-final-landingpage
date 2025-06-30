// // // src/contexts/ThemeContext.js
// // import React, { createContext, useContext, useEffect, useState } from 'react';

// // const ThemeContext = createContext();

// // export const useTheme = () => useContext(ThemeContext);

// // export const ThemeProvider = ({ children }) => {
// //   const [darkMode, setDarkMode] = useState(() => {
// //     const stored = localStorage.getItem('darkMode');
// //     return stored ? JSON.parse(stored) : false;
// //   });

// //   const toggleTheme = () => setDarkMode(prev => !prev);

// //   useEffect(() => {
// //     localStorage.setItem('darkMode', JSON.stringify(darkMode));
// //     document.body.className = darkMode ? 'dark-mode' : 'light-mode';
// //   }, [darkMode]);

// //   return (
// //     <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
// //       {children}
// //     </ThemeContext.Provider>
// //   );
// // };
// // src/contexts/ThemeContext.js
// import React, { createContext, useState, useContext, useEffect } from 'react';

// const ThemeContext = createContext();

// export const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState('light');

//   // Load saved theme from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem('theme');
//     if (saved) {
//       setTheme(saved);
//       document.documentElement.setAttribute('data-theme', saved);
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => useContext(ThemeContext);
