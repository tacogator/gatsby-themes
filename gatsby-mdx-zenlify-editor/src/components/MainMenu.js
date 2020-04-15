import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Menu} from '@material-ui/icons'
import BearMenuList from "./widgets/BearMenuList"

export default function SimpleMenuList() {
  const classes = useStyles();
  
  return (
    <BearMenuList label={<Menu/>}/>
  );
}



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));