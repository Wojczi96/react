import styles from './NavBar.module.scss'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <div>
                <a href="/">
                    <i className="fa fa-tasks"></i>
                </a>
            </div>
            <div>
                <ul>
                    <li><NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to="/">HOME</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to="/favorite">FAVORITE</NavLink></li>
                    <li><NavLink className={({ isActive}) => isActive ? styles.linkActive : undefined} to="/about">ABOUT</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;