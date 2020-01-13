import React from 'react';
import {useHistory} from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Navigation() {
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  // TODO Switch routing based on bottom navigation

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue)
      }}
      showLabels
    >
      <BottomNavigationAction value="/stock-table" label="Stock Table" icon={<RestoreIcon />} />
      <BottomNavigationAction value="/analytics" label="Analytics" icon={<FavoriteIcon />} />
      <BottomNavigationAction value="/user" label="User Profile" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
