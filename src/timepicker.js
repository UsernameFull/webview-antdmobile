import React, { useState, useEffect } from "react";
import { List, Switch, Calendar } from 'antd-mobile';
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';

import DemoLine_picker from "./chart_picker"

const now = new Date();

export default class TimePicker extends React.Component {
  originbodyScrollY = document.getElementsByTagName('body')[0].style.overflowY;

  constructor(props) {
    super(props);
    this.state = {
      en: false,
      show: false,
      showchart:false,
      config: {},
    };
  }

  renderBtn(zh, en, config = {}) {
    config.locale = this.state.en ? enUS : zhCN;

    return (
      <List.Item arrow="horizontal"
        onClick={() => {
          document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
          this.setState({
            show: true,
            config,
          });
        }}
      >
        {this.state.en ? en : zh}
      </List.Item>
    );
  }

  onSelectHasDisableDate = (dates) => {
    console.warn('onSelectHasDisableDate', dates);
  }

  onConfirm = (startTime, endTime) => {
    console.log(startTime,endTime.getTime());
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      showchart:true,
      startTime,
      endTime,
    });
  }

  onCancel = () => {
    document.getElementsByTagName('body')[0].style.overflowY = this.originbodyScrollY;
    this.setState({
      show: false,
      startTime: undefined,
      endTime: undefined,
    });
  }

  render() {
    return (
      <div>
        <List className="calendar-list" style={{ backgroundColor: 'white' }}>
          {this.renderBtn('选择日期时间区间(快捷)', 'Select DateTime Range (Shortcut)', { pickTime: true, showShortcut: true,enterDirection: 'horizontal' })}
        </List>
        <Calendar
          {...this.state.config}
          visible={this.state.show}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          onSelectHasDisableDate={this.onSelectHasDisableDate}
          defaultDate={now}
          minDate={new Date(+now - 5184000000)}
          maxDate={new Date(+now + 31536000000)}
        />
        {this.state.showchart&&<DemoLine_picker startTime={this.state.startTime.getTime()} endTime = {this.state.endTime.getTime()}/>}
      </div>
    );
  }
}