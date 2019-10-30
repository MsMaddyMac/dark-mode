import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';


function useDarkMode(key, initialValues) {
    const [theme, setTheme] = useLocalStorage(key, initialValues)
    const body = document.querySelector('body');

    useEffect(() => {
        if(theme) {
            body.classList.add('dark-mode');
        }else{
            body.classList.remove('dark-mode');
        }
}, [theme])

return [theme, setTheme];
}

export default useDarkMode;



