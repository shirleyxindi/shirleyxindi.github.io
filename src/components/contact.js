import * as React from "react";
import * as styles from "./contact.module.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Button, IconButton} from "@mui/material";

const Contact = () => {
    return (
        <div className={styles.container}>
            <IconButton size="large" target="_blank" href="https://www.linkedin.com/in/shirleyxindi"><LinkedInIcon/></IconButton>
        </div>
    )
}

export default Contact