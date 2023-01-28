import * as React from "react";
import {Link} from "gatsby";
import * as styles from "./navbar.module.css"

const NavBar = () => {
    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Link to="#about" className={styles.navLink}>About</Link>
                <Link to="#contact" className={styles.navLink}>Contact</Link>
            </nav>
        </div>
    )
}

export default NavBar