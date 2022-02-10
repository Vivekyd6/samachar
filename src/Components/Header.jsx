import React from 'react';
import { AppBar, makeStyles, Menu, Toolbar } from "@material-ui/core";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
//import { withThemeCreator } from '@material-ui/styles';

const useStyles=makeStyles({
    header:{
        background:'blue'
    }
})

const Header = () => {
    const classes=useStyles();
    return <>
        <AppBar className={classes.header}>
            <Toolbar>
            <MenuRoundedIcon/>
            </Toolbar>
        </AppBar>
    </>
};

export default Header;
