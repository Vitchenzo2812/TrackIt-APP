import { LogOut, User } from "lucide-react";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 7.3rem;
  background-color: #ffffff;
  border-bottom: rgba(0, 0, 0, 0.08) 0.1rem solid;

  padding: 1.6rem 2.4rem;
`;

export const WrapperButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`;

export const WrapperIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const UserIcon = styled(User)`
  width: 2.4rem;
  height: 2.4rem;
  color: #7A7A7A;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`

export const LogOutIcon = styled(LogOut)`
  width: 2.4rem;
  height: 2.4rem;
  color: #7A7A7A;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`