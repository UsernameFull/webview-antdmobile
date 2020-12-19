import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";

const Item = List.Item;
const Brief = Item.Brief;

const NumView = () => {
  const [data, setData] = useState([]);
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
        starttime:(new Date()).valueOf(),
        endtime: (new Date()).valueOf()+1,
        interval: 1,
        source: "sensor1",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        return setData(json.data.msg[0].vaule);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  return (
    <List renderHeader={() => "Basic Style"} className="my-list">
      <Item extra={"当前数值"}>{data||233}</Item>
    </List>
  );
};

export default NumView;
