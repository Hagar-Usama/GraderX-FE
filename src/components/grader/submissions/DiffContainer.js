import React from "react";
import { Header } from "semantic-ui-react";
import SingleDiff from "./SingleDiff";
//import Card from "@bit/nexxtway.react-rainbow.card";
import 'carbon-components/css/carbon-components.min.css';
import { Accordion, AccordionItem } from 'carbon-components-react';


function DiffContainer(props) {

  return (
    <React.Fragment>
      <Header textAlign="center" as="h4" style={{ color: "Black" }}>
        Results diff are ready for view
      </Header>

      <Accordion align="start">
        {props.diff.map((result) => (
          result.failed.length > 0 &&
          <SingleDiff result={result} key={result.id} />
          
        ))}
      </Accordion>

      <br></br>

    </React.Fragment>
  );
}

export default DiffContainer;
