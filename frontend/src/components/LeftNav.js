import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import {
  Radar, UserGroup, ViewShow, Wrench, Search
} from './Icons';


const navItems = [
  {
    name: 'My Students',
    icon: <UserGroup />,
    route: '/my/student'
  },
  {
    name: 'My Programs',
    icon: <UserGroup />,
    route: '/my/program'
  },
  {
    name: 'View All Data',
    icon: <ViewShow />,
    route: '/all'
  },
  {
    name: 'Analyze Data',
    icon: <Radar />,
    route: '/analyze-data'
  },
  {
    name: 'Manage Data',
    icon: <Wrench />,
    route: '/manage-data',
  },
  {
    name: 'Search',
    icon: <Search />,
    route: '/search',
  },
];

function BaseLink(props) {
  const {
    classes: { icon }
  } = props;
  const renderLink = itemProps => <Link to={props.item.route} {...itemProps} />;
  const { index, item, selected, setIndex } = props;

  return (
    <ListItem
      button
      selected={selected}
      onClick={() => setIndex(index)}
      component={renderLink}
    >
      <ListItemIcon className={selected ? icon : ''}>{item.icon}</ListItemIcon>
      <ListItemText primary={item.name} />
    </ListItem>
  );
}
const styles = theme => ({
  icon: {
    color: theme.palette.primary.main
  }
});
const LiLink = withStyles(styles)(BaseLink);

export default function Navigation() {
  const [selectedIndex, updateSelected] = useState(0);
  const setIndex = index => updateSelected(index);

  return (
    <List>
      {navItems.map((item, index) => (
        <LiLink
          index={index}
          item={item}
          key={item.name}
          selected={index === selectedIndex}
          setIndex={setIndex}
        />
      ))}
    </List>
  );
}

BaseLink.propTypes = {
  classes: PropTypes.object,
  item: PropTypes.object,
  index: PropTypes.object,
  selected: PropTypes.object,
  setIndex: PropTypes.func
};
