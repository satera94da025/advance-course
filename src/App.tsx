import React, {Suspense} from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Link to={'/'}>Главная</Link>
                <Link to={'/about'}>О сайте</Link>
                <Suspense fallback={<p>Loading...</p>}>
                    <Routes>
                        <Route path={'/about'} element={<AboutPageAsync />}/>
                        <Route path={'/'} element={<MainPageAsync />}/>
                    </Routes>
                </Suspense>
            </BrowserRouter>

        </div>
    );
};

export default App;