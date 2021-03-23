import React, { useState, useEffect } from "react";
import { Line } from "@ant-design/charts";
const DemoLine_t = (props) => {
  const [data, setData] = useState([]);
  const { ticker, type, source } = props;
  useEffect(() => {
    if (ticker === 1) {
      asyncFetch_();
    }
  }, [ticker]);

  const typemap = {
    m: [60, 60],
    h: [60 * 60, 24],
    d: [60 * 60 * 24, 30],
  };

  const asyncFetch = () => {
    fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:
          parseInt(new Date().getTime() / 1000) -
          typemap[type][0] * typemap[type][1],
        endtime: parseInt(new Date().getTime() / 1000),
        interval: typemap[type][0],
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        json.data.msg.map((e) => {
          e.time =8 +parseInt((e.time / 60 / 60) % 24) +":" +parseInt((e.time / 60) % 60);
        });
        return setData(json.data.msg);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const asyncFetch_ = () => {
    let starttime = parseInt(new Date().getTime() / 1000);
    let tt=[];
     (async()=>{
      const res = await fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime: starttime - typemap[type][0] * typemap[type][1],
        endtime: starttime,
        interval: typemap[type][0],
        source: "sensor0",
      }),
    });
    const json = await res.json();
    json.data.msg.map((e) => {
      e.time =8 +parseInt((e.time / 60 / 60) % 24) +":" +parseInt((e.time / 60) % 60);
      e.source = "sensor0";
    });
    // console.log(json.data.msg);
    tt=json.data.msg;
    const res1 = await fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime: starttime - typemap[type][0] * typemap[type][1],
        endtime: starttime,
        interval: typemap[type][0],
        source: "sensor1",
      }),
    });
    const json1 = await res1.json();
    json1.data.msg.map((e) => {
      e.time =8 +parseInt((e.time / 60 / 60) % 24) +":" +parseInt((e.time / 60) % 60);
      e.source = "sensor1";
    });
    tt = tt.concat(json1.data.msg)
    console.log(tt);
    setData(tt);

    })();
  };

  var config = {
    data: data,
    width: 300,
    stepType: "vh",
    title: "source",
    xField: "time",
    yField: "value",
    seriesField: 'source',
  };
  return <Line {...config} />;
};
export default DemoLine_t;
