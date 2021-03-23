import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";

const Item = List.Item;
const Brief = Item.Brief;

const NumView = (props) => {
  const [data, setData] = useState([]);
  const {ticker} = props
  useEffect(() => {if (ticker == 1) {asyncFetch_();}}, [ticker]);
  const asyncFetch = () => {
    fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:(new Date()).valueOf()/1000-1,
        endtime: (new Date()).valueOf()/1000,
        interval: 1,
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        return setData(json.data.msg[0].vaule||Math.random());
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
        starttime: starttime - 1,
        endtime: starttime,
        interval: 1,
        source: "sensor0",
      }),
    });
    const json = await res.json();
    // console.log(json.data.msg);
    tt.push(json.data.msg[0]);
    const res1 = await fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime: starttime -1,
        endtime: starttime,
        interval: 1,
        source: "sensor1",
      }),
    });
    const json1 = await res1.json();
    tt.push(json1.data.msg[0]);
    setData([Math.random(),1]);
    })();
  };



  return (
    <List renderHeader={() => "abc"} className="my-list">
      <Item extra={"sensor0"}>{data[0]}</Item>
      <Item extra={"sensor1"}>{data[1]}</Item>
    </List>
  );
};

export default NumView;
