// hooks most of the cases return js, not jsx
/* function hello() {   // simplest custom hook
    return [];
} */

import { useEffect, useState } from "react";

// custom hooks can also use built-in hooks

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});   // contingency plan (Plan B)
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    // when a component life cycle event triggers, there is a useEffect hook
    useEffect(() => {
        fetch(url).then((res) => res.json().then((res) => setData(res[currency]))); // key value
        console.log(data);
    }, [currency, url, data]);

    // return [data, setData];  // unsuitable approach
    return data;
}

export default useCurrencyInfo; // designed a functionality and returned the whole method