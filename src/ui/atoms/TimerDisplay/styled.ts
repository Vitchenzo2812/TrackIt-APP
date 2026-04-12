import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  position: relative;
  width: 32rem; 
  height: 32rem;
  margin: 0 auto;
  margin-bottom: 4.8rem;
`;

export const Svg = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
`;

export const BackgroundCircle = styled.circle`
  stroke: #f5f5f5;
  stroke-width: 12;
  fill: none;
`;

export const ProgressCircle = styled(motion.circle)<{ $isBreak: boolean }>`
  stroke: ${({ $isBreak }) => ($isBreak ? "#36BA98" : "#E76F51")};
  stroke-width: 12;
  fill: none;
  stroke-linecap: round;
`;

export const TimeContainer = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TimeText = styled(motion.div)`
  font-size: 7.2rem;
  color: #2e2e2e;
  font-variant-numeric: tabular-nums;
`;