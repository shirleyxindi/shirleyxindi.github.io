import * as React from "react";
import * as styles from "./front.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton} from "@mui/material";
import Contact from "./contact";
import {StaticImage} from "gatsby-plugin-image";

const Front = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <StaticImage className={styles.image} src="../images/FRZ02162.jpg" alt="Shirley Li"/>
            </div>
            <div className={styles.right}>
                <h1>Shirley Li.</h1>
                <p>Welkom op mijn mooie website :)</p>
                <p>Lezen=adten</p>
                <Contact/>
            </div>

        </div>
    )
}

export default Front