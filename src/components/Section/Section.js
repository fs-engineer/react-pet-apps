import { SectionWrapper } from "./Section.styled";

const Section = ({ children, title, direction }) => (
  <SectionWrapper direction={direction}>
    {title && <h2>{title}</h2>}
    {children}
  </SectionWrapper>
);

export default Section;
