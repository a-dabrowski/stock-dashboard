import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "components/UserPanel/userSlice";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";

export default function Navigation() {
  const [value, setValue] = React.useState(0);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const history = useHistory();
  // TODO Switch routing based on bottom navigation

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
    >
      {isLoggedIn
        ? [
            <BottomNavigationAction
              value="/listing"
              key="listing"
              label="Stock Table"
              icon={<RestoreIcon />}
            />,
            <BottomNavigationAction
              value="/analytics"
              key="analytics-route"
              label="Analytics"
              icon={<FavoriteIcon />}
            />,
            <BottomNavigationAction
              value="/user"
              key="user-route"
              label="User Profile"
              icon={<LocationOnIcon />}
            />
          ]
        : ""}
    </BottomNavigation>
  );
}
// TODO route to listing not table
