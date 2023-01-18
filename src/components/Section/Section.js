import { SectionWrapper } from "./Section.styled";

const Section = ({ children, title }) => (
  <SectionWrapper>
    <h2>{title}</h2>
    {children}
  </SectionWrapper>
);

export default Section;
