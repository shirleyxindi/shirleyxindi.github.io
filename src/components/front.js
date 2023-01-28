import * as React from "react";
import * as styles from "./front.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {IconButton} from "@mui/material";
import Contact from "./contact";

const Front = () => {
    return (
        <div className={styles.container}>
            <h1>Shirley Li.</h1>
            <p>Welkom op mijn mooie website :)</p>
            <p>Lezen=adten</p>
            <Contact/>
        </div>
    )
}

export default Front