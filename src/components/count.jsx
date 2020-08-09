import React from "react";
import styled from "styled-components";
import CountUp from "react-countup";

const Num = styled.div`
  color: #ffc338;
  font-weight: bold;
  margin-right: 5px;
  text-align: center;
  margin-bottom: 15px;
  width: 95%;
  margin-left: 2.5%;
  span {
    color: #fff;
    font-weight: normal;
  }
  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

function Count(data) {
  return (
    <CountUp
      end={data.data}
      start={1000}
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
