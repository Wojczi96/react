import styles from './NavBar.module.scss'

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
                    <li>
                        <a href="/">HOME</a>
                    </li>
                    <li>
                        <a href="/favorite">FAVORITE</a>
                    </li>
                    <li>
                        <a href="/about">ABOUT</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;