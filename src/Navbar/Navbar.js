import React from 'react';
import { AppBar, Typography, IconButton, Toolbar } from "@material-ui/core";
import FlagIcon  from "@material-ui/icons/Flag";
import useStyles from "./styles";


const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <FlagIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Country
                         </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Navbar
