import { Progress, Button, WingBlank, WhiteSpace } from "antd-mobile";
import React, { useState, useEffect } from "react";

const ProgressLine = (props) => {
  const {percent} = props
  return (
    <div className="progress-container">
      <Progress percent={20*percent} position="fixed" />
    </div>
  );
};

export default ProgressLine