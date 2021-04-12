import React,{ useState, useEffect } from "react";
import "./styles.css";

import { Flex, WhiteSpace } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
//进度条组件
import ProgressLine from "./progressline"
//table切换组件
import TabExample from "./table"
//单数据展示组件
import NumView from "./New/numview"
import Chart_demo from "./New/chart"
//日期选择组件
import TimePicker from "./timepicker"

export default function App() {
  return <FlexExample />;
}

const PlaceHolder = ({ className = "", ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>
    Block
  </div>
);

const useTicker = () => {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const start = Date.now();
    const intervalId = setInterval(() => {
      setTick(Math.floor((Date.now() - start) / 1000 %2));
    }, 50);
    return () => clearInterval(intervalId);
  }, []);
  return tick;
};

const FlexExample = () => {
  const count = useTicker();
  return (
  <div className="flex-container">
    {/* <NumView ticker = {count}/> */}
    {/* <ProgressLine percent={count} /> */}
    {/* <TabExample ticker = {count}/> */}
    {/* <TimePicker/> */}
    
     <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item>
      <NumView ticker = {count} sensornum="sensor0"/>
      </Flex.Item>
      <Flex.Item>
      <NumView ticker = {count} sensornum="sensor1"/>
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item>
      <NumView ticker = {count} sensornum="sensor4"/>
      </Flex.Item>
      <Flex.Item>
      <NumView ticker = {count} sensornum="sensor5"/>
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item>
      <Chart_demo ticker = {count} sensornum="sensor0"/>
      </Flex.Item>
      <Flex.Item>
      <Chart_demo ticker = {count} sensornum="sensor1"/>
      </Flex.Item>
    </Flex>
    <Flex>
      <Flex.Item>
      <Chart_demo ticker = {count} sensornum="sensor4"/>
      </Flex.Item>
      <Flex.Item>
      <Chart_demo ticker = {count} sensornum="sensor5"/>
      </Flex.Item>
    </Flex>

  </div>
  )
};
