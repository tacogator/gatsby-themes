import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {DnsOutlined} from '@material-ui/icons'
import BearMenuList from "./widgets/BearMenuList"

export default function SimpleMenuList() {
  const classes = useStyles();
  
  return (
    <BearMenuList label={<DnsOutlined/>}/>
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