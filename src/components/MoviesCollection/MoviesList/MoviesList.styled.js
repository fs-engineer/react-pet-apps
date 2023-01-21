import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  padding: 40px 20px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  /* width: 220px; */
`;
