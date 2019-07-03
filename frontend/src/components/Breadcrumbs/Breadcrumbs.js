import React from 'react';
import { Typography, Link, withStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { withRouter } from 'react-router';

function getRoutes(paths) {
  const pathArray = paths.toUpperCase().split('/');
  pathArray.pop();
  pathArray.shift();
  let t = '';
  // eslint-disable-next-line no-return-assign
  return pathArray.map(x => ({
    name: x.replace('-', ' '),
    route: t += `/${x}`,
  }));
}


function Breadcrumbs(props) {
  const {
    classes: {
      crumb, list, nav, spacer,
    }, location,
  } = props;
  const routes = getRoutes(location.pathname);

  const MapList = () => 
    <nav className={nav}>
      <ul className={list}>
        {routes.map((x, i) => (
          <Typography component="li" className={crumb} key={x.name}>
            <Link
              component={RouterLink}
              color="primary"
              to={x.route}
            >
              {x.name}
            </Link>
            {i !== routes.length - 1 && <span className={spacer}>{'>'}</span>}
            
          </Typography>
        ))}
      </ul>
    </nav>
    


  return (
    <MapList />
  );
}

const styles = theme => ({
  crumb: {
    display: 'inline',
    textTransform: 'capitalize',
  },
  list: {
    listStyle: 'none',
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1,
    paddingLeft: theme.spacing.unit * 3,
  },
  nav: {

  },
  spacer: {
    paddingLeft: theme.spacing.unit * 1,
    paddingRight: theme.spacing.unit * 1,
  },
});

export default withStyles(styles)(withRouter(Breadcrumbs));
