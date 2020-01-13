import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

export default function Navigation() {
  const [value, setValue] = React.useState(0);
  // TODO Switch routing based on bottom navigation

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction label="Stock Table" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Analytics" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="User Profile" icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}
