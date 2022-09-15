import styled from '@emotion/styled';
import { Button, theme } from '@chakra-ui/react';

export const SideBarContainer = styled.div`
  height: 100%;
  width: 200px;
  background-color: ${theme.colors.gray[800]};
  box-shadow: ${theme.shadows['dark-lg']};
`;

export const SideBarHeader = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${theme.colors.gray[900]};
  color: ${theme.colors.white};
  font-weight: ${theme.fontWeights.bold};
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  &:hover {
    background-color: ${theme.colors.gray[700]};
    transition: all 0.2s ease-in-out;
  }
`;

export const SideBarContent = styled.div`
  height: calc(100% - 136px);
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const SideBarFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 16px;

  height: 76px;
  width: 100%;
`;

export const Route = styled(Button)`
  height: 40px;
  display: flex;
  color: ${theme.colors.white};
  gap: 8px;
  justify-content: start;
  padding: 0px 8px;

  &:hover {
    background-color: ${theme.colors.gray[900]};
  }
`;
