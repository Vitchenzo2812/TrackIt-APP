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
  margin-bottom: 0.4rem;
`;

export const Bar = styled(motion.div)<{ $color?: string }>`
  height: 100%;
  border-radius: 999px;
  background: ${({ $color }) =>
    $color || "linear-gradient(to right, #E76F51, #F4A261)"};
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.8rem;
`;