import styled from "@emotion/styled";

export const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const Tab = styled.div`
  min-width: 40px;
  padding: 15px;
  border: 1px solid blue;
  border-radius: 5px;
  cursor: pointer;

  :not(:last-child) {
    margin-right: 15px;
  }
`;
