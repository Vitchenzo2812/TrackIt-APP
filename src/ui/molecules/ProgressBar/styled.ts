import { motion } from "motion/react";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const BarContainer = styled.div`
  height: 0.8rem;
  background: #f5f5f5;
  border-radius: 999px;
  overflow: hidden;
`;

export const Bar = styled(motion.div)<{ $color?: string }>`
  height: 100%;
  border-radius: 999px;
  background: ${({ $color }) =>
    $color || "linear-gradient(to right, #E76F51, #F4A261)"};
`;

export const Label = styled.p`
  margin-top: 0.4rem;
  font-size: 1.4rem;
  color: #7a7a7a;
  text-align: right;
`;