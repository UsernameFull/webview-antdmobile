import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";

const Item = List.Item;
const Brief = Item.Brief;

const NumView = (props) => {
  const [data, setData] = useState([]);
  const {ticker} = props
  useEffect(() => {if (ticker == 1) {asyncFetch();}}, [ticker]);
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

  return (
    <List renderHeader={() => "abc"} className="my-list">
      <Item extra={"当前数值"}>{data}</Item>
    </List>
  );
};

export default NumView;
