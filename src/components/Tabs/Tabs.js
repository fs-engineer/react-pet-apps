import { useEffect, useState } from "react";
import { Tab, TabsContainer } from "./Tabs.styled";

const tabs = ["Phone Book", "Image Finder", "Video Player"];

const Tabs = ({ handleChangeTab }) => {
  const [tabIdx, setTabIdx] = useState(1);

  useEffect(() => {
    handleChangeTab(tabIdx);
  }, [tabIdx, handleChangeTab]);

  const onTabClick = (idx) => {
    setTabIdx(idx);
  };

  return (
    <TabsContainer>
      {tabs &&
        tabs.map((name, idx) => (
          <Tab key={name} onClick={() => onTabClick(idx)}>
            {name}
          </Tab>
        ))}
    </TabsContainer>
  );
};

export default Tabs;
