import {createContext, useContext, useEffect, useState} from "react";

// theme must be light or dark. You can change it to another names, another enums.
export type ThemeTypes = 'light' | 'dark'


// Create interface for context
interface ThemeHelperContextInterface {
    type: ThemeTypes,
    changeType: any
}

// Create default value for context.
const defaultContextValues : ThemeHelperContextInterface = {
    "type": "light",
    "changeType": () => {}
}

// Create context.
const ThemeHelperContext = createContext<ThemeHelperContextInterface>(defaultContextValues)

function ThemeHelperProvider(props: any) {
    const context = useContext(ThemeHelperContext)
    const [theme, setTheme] = useState(defaultContextValues.type)
    useEffect(() => {
        context.changeType = changeTheme
    }, [])

    //Change theme function
    function changeTheme(value: ThemeTypes) {
        console.log(value)
        if (value) {
            setTheme(value);
        } else {
            setTheme(value);
        }
    }

    return(
        <ThemeHelperContext.Provider value={{
            type: theme,
            changeType: (value: ThemeTypes) => changeTheme(value)
        }}>
            {props.children}
        </ThemeHelperContext.Provider>
    )
}

export {ThemeHelperProvider, ThemeHelperContext}
