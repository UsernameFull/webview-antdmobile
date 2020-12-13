import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
const DemoLine = (props) => {
  const [data, setData] = useState([]);
  const { source } = props;
  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  useEffect(() => {
    var interval = setInterval(function () {
      asyncFetch()
    }, 5000);
  }, []);

  const asyncFetch = () => {
    fetch("http://106.15.91.156:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:0,
        endtime: 10,
        interval: "second",
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        return setData(json.data.msg);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  var config = {
    data: data,
    width: 300,
    stepType: 'vh',
    title:"source",
    xField: "time",
    yField: "value",
  };
  return <Line {...config} />;
};
export default DemoLine;
