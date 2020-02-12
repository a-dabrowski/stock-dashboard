import React, {useEffect, useState} from 'react';
import Chip from '@material-ui/core/Chip';
import {User, getUserData} from 'api';

interface FetchLoaded<T> {
  loaded: true;
  data: T;
}
interface FetchWaiting {
  loaded: false;
}
type Api<T> = FetchLoaded<T> | FetchWaiting;

export default function ClientPanel() {
  const [userData, setUserData] = useState<Api<User>>({
    loaded: false,
  });
  useEffect(() => {
    getUserData(1).then(response =>
      setUserData({loaded: true, data: response}),
    );
  }, []);

  return (
    <React.Fragment>
      {userData.loaded && (
        <div>
          <h4>Username: {userData.data.name}</h4>
          <p>Stock subscriptions:</p>
          {userData.data.subscriptions.map((tickerName, index) => {
            return <Chip key={index} label={tickerName} variant="outlined" color="primary" />;
          })}
        </div>
      )}
    </React.Fragment>
  );
}
