import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
const DemoLine_m = (props) => {
  const [data, setData] = useState([]);
  const { source } = props;
  // useEffect(() => {
  //   asyncFetch();
  // }, []);

  useEffect(() => {
    asyncFetch();
    var interval = setInterval(function () {
      asyncFetch()
    }, 5000);
  }, []);

  const asyncFetch = () => {
    fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:parseInt(new Date().getTime()/1000)-3600,
        endtime: parseInt(new Date().getTime()/1000),
        interval: 60,
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        json.data.msg.map((e)=>{
          e.time = 8+parseInt(e.time/60/60%24)+":"+parseInt(e.time/60%60)
          // console.log(e.time);
        })
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
export default DemoLine_m;
