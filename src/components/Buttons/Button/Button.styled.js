import styled from "@emotion/styled";

export const StyledBtn = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid blue;
  color: ${({ color }) => color};
  cursor: pointer;
  // transition: all 2s easy-in;
  transition: background 0.2s ease-in-out;

  :hover {
    background-color: #687def95;
  }
`;
