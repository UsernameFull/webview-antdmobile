import React, { useState, useEffect } from "react";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import DemoLine_t from "./chart_time";


const tabs = [
  { title: <Badge >分</Badge> },
  { title: <Badge >时</Badge> },
  { title: <Badge >天</Badge> },
];

const TabExample = (props) => {
  const {ticker} = props
  return(
  <div>
    <Tabs tabs={tabs}
      initialPage={0}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' ,padding:'10%'}}>
      <DemoLine_t ticker = {ticker} type="m" source={["sensor0","sensor1"]}/>
      </div>
      {/* <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' ,padding:'10%'}}>
      <DemoLine_t ticker = {ticker} type="h" source={["sensor0","sensor1"]}/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' ,padding:'10%'}}>
      <DemoLine_t ticker = {ticker} type="d" source={["sensor0","sensor1"]}/>
      </div> */}
    </Tabs>
    <WhiteSpace />

  </div>
)};
export default TabExample