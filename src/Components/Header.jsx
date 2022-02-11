import React from 'react';
import { AppBar, Toolbar ,makeStyles} from "@material-ui/core";

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
//import { withThemeCreator } from '@material-ui/styles';

const useStyles = makeStyles({
    header: {
        background: 'blue',
        height: 70
    },
    logo: {
        height: 55,
        margin: 'auto',
        paddingRight: 70,
        fontSize:40
    }
})



const Header = () => {
    const classes = useStyles();
    return <>
        <AppBar className={classes.header}>
            <Toolbar>
            <MenuRoundedIcon/>
            <p className={classes.logo}>Samachar App</p>
            </Toolbar>
        </AppBar>
    </>
};



export default Header;
