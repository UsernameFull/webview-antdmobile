import React, { useState, useEffect } from "react";
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import DemoLine from "./chart";

const tabs = [
  { title: <Badge >秒</Badge> },
  { title: <Badge >分</Badge> },
  { title: <Badge >时</Badge> },
];


const TabExample = () => (
  <div>
    <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' ,padding:'10%'}}>
        <DemoLine source="aaaa"/>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        2
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '500px', backgroundColor: '#fff' }}>
        3
      </div>
    </Tabs>
    <WhiteSpace />

  </div>
);
export default TabExample