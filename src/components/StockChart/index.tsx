import React from "react";
import { ResponsiveLine } from "@nivo/line";
import styled from "styled-components";
import data from "./data";
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
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1
            }
          }
        ]
      }
    ]}
  />
);

const WrappedStockLine = () => (
  <Wrapper>
    <StockLineChart data={data} />
  </Wrapper>
);

export default WrappedStockLine;
