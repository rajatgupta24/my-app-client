import React from "react";
import { Card } from "antd";
import * as echarts from "echarts";

import styles from "./chartCard.module.css";
import SmallCard from "../smallCard/smallCard";

interface ChartCardProps {
  name: number;
}

const ChartCard = (props: ChartCardProps) => {
  let myChart = null;

  setTimeout(() => {
    myChart = echarts.init(document.getElementById(`chart-${props.name}`));

    myChart?.setOption({
      tooltip: {},
      grid: {
        left: "0%",
        right: "0%",
        bottom: "0%",
        borderRadius: "8px",
      },
      xAxis: [
        {
          show: false,
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
      yAxis: [
        {
          show: false,
          type: "value",
        },
      ],
      series: [
        {
          name: "Line 1",
          type: "line",
          stack: "Total",
          smooth: true,
          lineStyle: {
            width: 0,
          },
          showSymbol: false,
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "rgb(128, 255, 165)",
              },
              {
                offset: 1,
                color: "rgb(1, 191, 236)",
              },
            ]),
          },
          emphasis: {
            focus: "series",
          },
          data: [140, 232, 101, 264, 90, 340, 250],
        },
      ],
    });
  }, 500);

  return (
    <>
      <Card style={{ width: "33%" }}>
        <div className={styles.card}>
          <SmallCard />
        </div>
        <div
          id={`chart-${props.name}`}
          style={{ width: "100%", height: "10rem" }}
        ></div>
      </Card>
    </>
  );
};

export default ChartCard;
