import React, {useEffect, useState} from 'react';
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
    getUserData(1).then(response => setUserData({loaded: true, data: response}));
  }, [])

  return (
    <div>{ userData.loaded && 'kopytko' }</div>
  );
}
