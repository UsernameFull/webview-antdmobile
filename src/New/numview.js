import { List } from "antd-mobile";
import React, { useState, useEffect } from "react";

const Item = List.Item;

const NumView = (props) => {
  const [data, setData] = useState([]);
  const {ticker,sensornum} = props
  useEffect(() => {if (ticker === 1) {asyncFetch();}}, [ticker]);

  const asyncFetch = () => {
    let nowTime =parseInt((new Date()).valueOf()/1000)-5;
    fetch("http://47.110.147.58:55556/api/getdata", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        starttime:nowTime-40,
        endtime: nowTime,
        interval: 2,
        source: sensornum,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        json.data.msg.map((e)=>{
          e.time = 8+parseInt(e.time/60/60%24)+":"+parseInt(e.time/60%60)
        })

        json.data.msg[0].value = Math.max(...json.data.msg.map(e=>e.value))
        for (let i=1;i<json.data.msg.length;i++){
          if(json.data.msg[i].value ===0){
            json.data.msg[i].value=json.data.msg[i-1].value
          }
        }
        return setData(json.data.msg[json.data.msg.length-1].value);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };


  return (
    <div >
      <List renderHeader={sensornum} className="my-list">
      <Item >{data}</Item>
    </List>
    </div>
  );
};

export default NumView;
