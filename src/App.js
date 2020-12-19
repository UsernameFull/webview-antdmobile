import React,{ useState, useEffect } from "react";
import "./styles.css";

import { Flex, WhiteSpace } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

import ProgressLine from "./progressline"
import TabExample from "./table"
import NumView from "./numview"
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
      setTick(1+Math.floor((Date.now() - start) / 1000 %5));
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return tick;
};

const FlexExample = () => {
  const count = useTicker();
  return (
  <div className="flex-container">
    <ProgressLine percent={count} />
    <TabExample ticker = {count}/>
    <NumView ticker = {count}/>
    {/* <TimePicker/> */}
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="between">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <WhiteSpace />
    <Flex align="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="baseline">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
  )
};
