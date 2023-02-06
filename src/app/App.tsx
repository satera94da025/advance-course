import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import './styles/index.scss'
import {AboutPage} from "pages/AboutPage";
import {Navbar} from "../widgets/Navbar";
import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";



const App = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;