import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Num = styled.div`
  color: #ffc338;
  font-weight: bold;
  margin-right: 5px;
  text-align: center;
  margin-bottom: 5px;
  span {
    color: #fff;
    font-weight: normal;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

function Count(data) {
  return (
    <CountUp
      end={data.data}
      duration={4.75}
      separator=" "
      delay={0}
      suffix={`<span> people have clicked to support the #FreeBenWhite movement.</span>`}
    >
      {({ countUpRef }) => <Num ref={countUpRef} />}
    </CountUp>
  );
}

export default Count;
