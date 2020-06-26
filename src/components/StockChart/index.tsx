import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { selectStockChartData } from 'components/StockChart/stockChartSlice';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

interface StockChartData {}

interface Slice {
  id: any;
  points: any[];
}

interface SlicePoint {}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
`;
const StockLineChart = (props: any) => (
  <ResponsiveLine
    data={props.data}
    margin={{ top: 10, right: 30, bottom: 50, left: 30 }}
    xScale={{
      type: "time",
      format: "%Y-%m-%d",
      precision: "day"
    }}
    xFormat="time:%Y-%m-%d"
    yScale={{
      type: "linear",
      stacked: false
    }}
    axisLeft={{
      legend: "",
      legendOffset: 12
    }}
    axisBottom={{
      format: "%b %d",
      tickValues: "every 1 days",
      tickRotation: 40,
      legend: "",
      legendOffset: -12
    }}
    colors={{ scheme: "nivo" }}
    enableSlices="x"
    sliceTooltip={({ slice }: { slice: Slice }) => {
      // TODO improve style and semantic tag on tooltip
      return (
        <div
          style={{
            background: "white",
            padding: "9px 12px",
            border: "1px solid #ccc"
          }}
        >
          {slice.points.map(point => (
            <div
              key={point.id}
              style={{
                color: "#000",
                padding: "3px 0"
              }}
            >
              {props.data.length > 1 ? <div>{point.id.split(".")[0]}</div> : null}
              <div>Date: {point.data.xFormatted}</div>
              <div>Price: {point.data.yFormatted} PLN</div>
            </div>
          ))}
        </div>
      );
    }}
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
  />
);

const WrappedStockLine = () => {
const stockData = useSelector(selectStockChartData);
  return (
  <Wrapper>
    <StockLineChart data={stockData} />
  </Wrapper>
)};

export default WrappedStockLine;
