import { useState } from "react";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
import { EXAMPLES } from "../data.js";

export default function Examples() {
  // const stateArray = useState("Please click a button"); // must call top level of component function
  const [selectedTopic, setSelectedTopic] = useState();

  function handleClick(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  console.log("App Component Executing");

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section title="Examples" id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => handleClick("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
