import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
const DemoLine_d = (props) => {
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
    fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:parseInt(new Date().getTime()/1000)-3600*24*30,
        endtime: parseInt(new Date().getTime()/1000),
        interval: 60*60*24,
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        json.data.msg.map((e)=>{
          let tt = new Date(e.time*1000)
          e.time = (tt.getMonth()+1)+"."+tt.getDate()
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
export default DemoLine_d;
