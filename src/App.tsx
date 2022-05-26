import React, {useContext, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {ThemeHelperContext, ThemeHelperProvider, ThemeTypes} from "./Context/ThemeHelper";

function App() {
    // Get theme type from ThemeHelperContext
    const themeContext = useContext(ThemeHelperContext)
    function ChangeTheme(newTheme: ThemeTypes){
        themeContext.changeType(newTheme)
    }
    return (
        <ThemeHelperProvider>
            <ThemeHelperContext.Consumer>
                {(context) => (
                    <div className="App" data-theme={context.type}>
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p className={"text"}>
                                Edit <code>src/App.tsx</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                            <button
                                style={{marginTop: 20}}
                                onClick={() => ChangeTheme(context.type === "light"?"dark":"light")}>
                                Switch to {context.type==="light"?"dark":"light"} theme
                            </button>
                        </header>
                    </div>
                )}
            </ThemeHelperContext.Consumer>
            { /* Pass theme type to data-theme */}

        </ThemeHelperProvider>

    );
}

export default App;
