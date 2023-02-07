import {classNames} from "shared/lib/classNames/classNames";
import './styles/index.scss'
import {Navbar} from "../widgets/Navbar";
import {AppRouter} from "./providers/router";
import {useTheme} from "./providers/ThemeProvider";



const App = () => {

   const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter/>
        </div>
    );
};

export default App;