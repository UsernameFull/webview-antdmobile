import React, { useState, useEffect } from "react";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';

import DemoLine_d from "./chart_d";
import DemoLine_h from "./chart_h";
import DemoLine_m from "./chart_m";

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
        <DemoLine_m ticker = {ticker} source="aaaa"/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' ,padding:'10%'}}>
      <DemoLine_h ticker = {ticker} source="aaaa"/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#fff' ,padding:'10%'}}>
      <DemoLine_d ticker = {ticker} source="aaaa"/>
      </div>
    </Tabs>
    <WhiteSpace />

  </div>
)};
export default TabExample