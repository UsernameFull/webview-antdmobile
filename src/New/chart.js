import React, { useState, useEffect } from "react";
import { Line,Area  } from "@ant-design/charts";
const Chart_demo = (props) => {
  const [data, setData] = useState([]);
  const {ticker ,sensornum} = props
  useEffect(() => {if (ticker === 1) {asyncFetch()}}, [ticker]);

  const asyncFetch = () => {
    let nowTime = parseInt(new Date().getTime()/1000)-5;
      fetch("http://47.110.147.58:55556/api/getdata", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          starttime:nowTime-60,
          endtime: nowTime,
          interval: 2,
          source: sensornum,
        }),
      })
        .then((response) => response.json())
        .then((json) => {
          json.data.msg.map((e)=>{
            e.time = parseInt(8+e.time/60/60%24)+":"+parseInt(e.time/60%60)+":"+parseInt(e.time%60)
          })
          json.data.msg[0].value = Math.max(...json.data.msg.map(e=>e.value))

          for (let i=1;i<json.data.msg.length;i++){
            if(json.data.msg[i].value ===0){
              // json.data.msg[i].value=null
              json.data.msg[i].value=json.data.msg[i-1].value
            }
          }
          return setData(json.data.msg);
        })
        .catch((error) => {
          console.log("fetch data failed", error);
        });
  };
  var config = {
    data: data,
    width: 300,
    height: 200,
    stepType: 'vh',
    // connectNulls:true,
    animation: false,
    title:"source",
    xField: "time",
    yField: "value",
  };
  return <Line {...config} />;
};
export default Chart_demo;
