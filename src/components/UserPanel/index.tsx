import React, {useEffect, useState} from 'react';
import Chip from '@material-ui/core/Chip';
import {User, getUserData} from 'api';
import {useSelector, useDispatch} from 'react-redux';
import {changeDisplayName, selectDisplayName} from './userSlice';

interface FetchLoaded<T> {
  loaded: true;
  data: T;
}
interface FetchWaiting {
  loaded: false;
}
type Api<T> = FetchLoaded<T> | FetchWaiting;

export default function ClientPanel() {
  const displayName = useSelector(selectDisplayName);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState<Api<User>>({
    loaded: false,
  });
  useEffect(() => {
    getUserData(1).then(response =>
      setUserData({loaded: true, data: response}),
    );
  }, []);

  const setNameAsUsername = () => {
    if (userData.loaded)
      dispatch(changeDisplayName({newDisplayName: userData.data.name}));
  };

  return (
    <React.Fragment>
      {userData.loaded && (
        <div>
          <h4>Username: {userData.data.name}</h4>
          <p>Stock subscriptions:</p>
          {userData.data.subscriptions.map((tickerName, index) => {
            return (
              <Chip
                key={index}
                label={tickerName}
                variant="outlined"
                color="primary"
              />
            );
          })}
          <h6>Display name: {displayName}</h6>
          <p>Set name as username</p>
          <button onClick={setNameAsUsername}>
            Set Display Name to Username
          </button>
        </div>
      )}
    </React.Fragment>
  );
}
