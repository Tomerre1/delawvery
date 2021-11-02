import { NavLink } from "react-router-dom";
import logo from '../assets/img/DeLawVeryLogo.svg'
export const AppHeader = () => {
    return (
        <header className="app-header flex align-center justify-center">
            <NavLink to="/">
                <img className="logo" src={logo} alt="company logo" />
            </NavLink>
        </header>
    )
}
