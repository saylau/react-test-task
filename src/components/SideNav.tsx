import React from 'react';
import '../App.css';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import ListAlt from '@material-ui/icons/ListAlt'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      width: 230,
    },
  });

export const SideNav = ()=> {
    const classes = useStyles();

    return (
        <div>
            <MenuList className={classes.root}>
                <MenuItem>
                <ListItemIcon>
                    <ListAlt fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit"><Link to="/courses">Курсы/Группы</Link></Typography>
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <PlaylistAddCheckIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit">Тесты</Typography>
                </MenuItem>
                <MenuItem>
                <ListItemIcon>
                    <AccountBoxIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="inherit" >
                    <Link to="/course">Студенты</Link>
                </Typography>
                </MenuItem>
            </MenuList>
        </div>
    );
}
