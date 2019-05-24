import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCourses } from 'services/courseServices';
import PropTypes from 'prop-types';

import {
  Link as StyledLink,
  Table, TableBody, TableCell, TableHead, TableRow, Typography, withStyles,
} from '@material-ui/core';

const TablePageStyles = theme => ({
    header: {
      color: theme.palette.primary.main,
      marginBottom: theme.spacing.unit * 1,
      textTransform: 'uppercase',
    },
    striped: {
      background: theme.grays.g0,
    },
    tHead: {
      fontSize: 16,
      color: theme.palette.primary.main,
      textTransform: 'uppercase',
    },
    tRow: {
      height: 32,
    },
  });

export { TablePageStyles };