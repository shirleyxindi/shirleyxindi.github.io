import * as React from "react";
import * as styles from "./contact.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, IconButton} from "@mui/material";
import {Instagram} from "@mui/icons-material";

const Contact = () => {
    return (
        <div className={styles.container}>
            <IconButton size="large" target="_blank" href="https://www.linkedin.com/in/shirleyxindi"><LinkedInIcon/></IconButton>
            <IconButton size="large" target="_blank" href="https://www.instagram.com/shirley.l.i/"><Instagram/></IconButton>
        </div>
    )
}

export default Contact