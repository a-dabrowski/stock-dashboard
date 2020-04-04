import React from 'react';
import User from 'components/UserPanel';
import RiskSlider from 'components/RiskSlider';
const UserPanel = () => {
  return (
    <div>
      Change your user identity
      <User />
      <RiskSlider />
    </div>
  );
}
export default UserPanel;
