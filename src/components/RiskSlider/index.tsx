import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { useSelector, useDispatch } from "react-redux";
import {
  selectRiskValue,
  changeRiskValue
} from "components/UserPanel/userSlice";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

const marks = [
  {
    value: -100,
    label: 'Risk Averse',
  },
  {
    value: 0,
    label: 'Risk Neutral',
  },
  {
    value: 100,
    label: 'Risk Seek',
  },
];

function valueLabelFormat(value: number) {
  const beta = '\u03B2';
  return  `${beta} ${value / 100}`;
}

export default function DiscreteSlider() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const riskPreference = useSelector(selectRiskValue);
  const handleChange = (_event: any, newValue: number | number[]) : void => {
    if(newValue !== riskPreference) {
      dispatch(changeRiskValue(newValue));
    }
  }

  return (
    <div className={classes.root}>
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
    </div>
  );
}
