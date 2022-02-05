import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Tabsmac from "./Tabs_nav/Tabsmac";
import Tabsprice from "./Tabs_nav/Tabsprice";
import Tabdoor from "./Tabs_nav/Tab_door";
import "../CSS/Tabsnav.css";
import "./Tabs_nav/TabContent.css";
import TabContentOne from "./Tabs_nav/TabContentOne";
import TabContentTwo from "./Tabs_nav/TabContentTwo";
import TabContentthree from "./Tabs_nav/TabContentthree";

function TabComponent() {
  const [tabindex, settabindex] = useState(0);
  return (
    <div>
      <Tabs
        className="tabs"
        selectedIndex={tabindex}
        onSelect={(index) => settabindex(index)}
      >
        <TabList className="tabs-container">
          <Tab className={`${tabindex === 0 ? "tab-selected active" : null} `}>
            <Tabdoor />
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "20px",
              }}
            >
              No Commitments.Cancel Online At Anytime
            </p>
          </Tab>
          <Tab className={`${tabindex === 1 ? "tab-selected active" : null}`}>
            <Tabsmac />
            <p
              style={{
                marginTop: "-6rem",
                marginBottom: "20px",
              }}
            >
              Watch Anywhere
            </p>
          </Tab>
          <Tab className={`${tabindex === 2 ? "tab-selected active" : null}`}>
            <Tabsprice />
            <p
              style={{
                marginTop: "0.5rem",
                marginBottom: "20px",
              }}
            >
              Pick Your Price
            </p>
          </Tab>
        </TabList>
        <TabPanel>
          <TabContentOne />
        </TabPanel>
        <TabPanel>
          <TabContentTwo />
        </TabPanel>
        <TabPanel>
          <TabContentthree />
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabComponent;
