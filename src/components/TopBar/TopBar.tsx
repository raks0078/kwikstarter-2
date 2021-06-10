import { useWeb3React } from "@web3-react/core";
import React from "react";
import styled from "styled-components";
import { UnsupportedChainIdError } from "@web3-react/core";

const TopHeader = styled.div`
  width: 100%;
  padding: 0.5rem;
  color: white;
  display: flex;
  background: #010415;
  justify-content: center;
`;

export const TopBar = () => {
  const { error } = useWeb3React();
  return error instanceof UnsupportedChainIdError ? (
    <TopHeader>You are Connected With Unsuppported Network.</TopHeader>
  ) : null;
};

export default TopBar;
