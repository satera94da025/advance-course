import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {Sidebar} from "widgets/Sidebar";
import {Navbar} from "../widgets/Navbar";
import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";



const App = () => {

   const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>

        </div>
    );
};

export default App;