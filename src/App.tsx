import React from "react";
import Section from "./components/Section";
import Globalstyles from "./styles/Globalstyles";

import data from "./Data";
import SideMenu from "./components/SideMenu";
import MenuForm from "./components/MenuForm";

function App() {
  return (
    <>
      <Section
        variant="blue"
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant="beige"
        title={data[1].title}
        description={data[1].description}
      />
      <Section
        variant="blue"
        title={data[2].title}
        description={data[2].description}
      />
      <Section
        variant="white"
        title={data[3].title}
        description={data[3].description}
      />
      <Section
        variant="black"
        title={data[4].title}
        description={data[4].description}
      />
      <SideMenu>
        <MenuForm />
      </SideMenu>

      <Globalstyles />
    </>
  );
}

export default App;
