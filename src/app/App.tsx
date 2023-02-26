import { Suspense, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar';
import { userActions } from "../entities/User";
import { Navbar } from '../widgets/Navbar';
import { AppRouter } from './providers/router';
import { useTheme } from "./providers/ThemeProvider";

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
