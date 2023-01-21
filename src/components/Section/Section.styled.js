import styled from "@emotion/styled";

export const SectionWrapper = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: flex-start;
  padding: 15px;
`;
