import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';


function useDarkMode(key, initialValues) {
    const [theme, setTheme] = useLocalStorage(key, initialValues)
    const body = document.querySelector('body');

    useEffect(() => {
        return (theme ? body.classList.add('dark-mode') 
        : body.classList.remove('dark-mode'));
}, [theme])

return [theme, setTheme];
}

export default useDarkMode;



