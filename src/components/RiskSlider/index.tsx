import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import RoundedContainer from "components/RoundedContainer";
import Slider from "@material-ui/core/Slider";
import { useSelector, useDispatch } from "react-redux";
import {
  selectRiskValue,
  selectSavedRiskValue,
  changeRiskValue,
  saveRiskPreference
} from "components/UserPanel/userSlice";

const marks = [
  {
    value: -100,
    label: "Averse"
  },
  {
    value: 0,
    label: "Neutral"
  },
  {
    value: 100,
    label: "Seeking"
  }
];

function valueLabelFormat(value: number) {
  const beta = "\u03B2";
  return `${beta} ${value / 100}`;
}

export default function DiscreteSlider() {
  const dispatch = useDispatch();
  const riskPreference = useSelector(selectRiskValue);
  const savedRiskPreference = useSelector(selectSavedRiskValue);
  const handleChange = (_event: any, newValue: number | number[]): void => {
    if (newValue !== riskPreference) {
      dispatch(changeRiskValue(newValue));
    }
  };

  const handleSaveRiskClick = (_event: any): void => {
    dispatch(saveRiskPreference(riskPreference));
  };

  return (
    <RoundedContainer>
      <Typography id="discrete-slider-restrict" gutterBottom>
        Select your risk attitude
      </Typography>
      <Slider
        min={-100}
        max={100}
        step={10}
        value={riskPreference}
        valueLabelFormat={valueLabelFormat}
        getAriaValueText={valueLabelFormat}
        aria-labelledby="discrete-slider-restrict"
        valueLabelDisplay="auto"
        marks={marks}
        onChange={handleChange}
      />
      {riskPreference !== savedRiskPreference ? (
        <Button
          onClick={handleSaveRiskClick}
          variant="outlined"
          color="primary"
        >
          Save
        </Button>
      ) : (
        ""
      )}
    </RoundedContainer>
  );
}
