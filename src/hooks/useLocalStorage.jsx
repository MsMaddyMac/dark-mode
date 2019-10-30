import React, { useState } from 'react'

function useLocalStorage(key, intitialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        // Gets value from localStorage by key^^
        return item ? JSON.parse(item) : intitialValue;
        // If value is an object or array it will be parsed into JSON
    });

    const setValue = value => {
        // Sets value to localStorage using the key passed above in the useLocalStorage hook
        setStoredValue(value);
         // Updates storedValue with value(key)
        window.localStorage.setItem(key, JSON.stringify(value));
       // Is taking the previously parsed value and returning it as a string. 
    }
    return [storedValue, setValue];
};

export default useLocalStorage;


