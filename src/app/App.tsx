import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from "shared/lib/classNames/classNames";
import {MainPage} from "pages/MainPage";
import './styles/index.scss'
import {AboutPage} from "pages/AboutPage";
import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";



const App = () => {

   const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter/>
        </div>
    );
};

export default App;