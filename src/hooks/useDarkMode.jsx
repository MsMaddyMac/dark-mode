import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';


function useDarkMode(key, initialValues) {
    const [theme, setTheme] = useLocalStorage(key, initialValues)
    // calls useLocalStorage and passes in key needed to be stored as parameter
    const body = document.querySelector('body');
    // creates a variable that assigns a value which access the body element needed to be manipulated on the DOM. This manipulation is a side effect requiring useEffect hook.
    useEffect(() => {
        return (theme ? body.classList.add('dark-mode') 
        // ^^ if theme is true dark-mode class will be added to the body element
        : body.classList.remove('dark-mode'));
        // ^^ if theme is false dark-mode class will be removed from the body element
}, [theme]) // adding theme to the dependency array will enable useEffect to run only when theme is manipulated.

return [theme, setTheme];
}

export default useDarkMode;



