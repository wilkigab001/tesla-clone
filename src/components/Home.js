import React from "react";
import styled from "styled-components";
import Section from "./Section";
const Home = () => {
  return (
  <Container>
    <Section
    title="Model S"
    description="Order Online"
    backgroundImg="model-s.jpg"
    leftBtnText="Custom Order"
    rightBtnText="ExistingInventory" 
    />
    <Section
    title="Model 3"
    description="Order Online for touchless delivery"
    backgroundImg="model-3.jpg"
    leftBtnText="Custom Order"
    rightBtnText="ExistingInventory" 
    />
    <Section
    title="Model X"
    description="Order Online for touchless delivery"
    backgroundImg="model-x.jpg"
    leftBtnText="Custom Order"
    rightBtnText="ExistingInventory" 
    />
    <Section
    title="Model Y"
    description="Order Online for touchless delivery"
    backgroundImg="model-y.jpg"
    leftBtnText="Custom Order"
    rightBtnText="Existing Inventory" 
    />
    <Section
    title="Lowest Cost Solar Panels in America"
    description="Money back Guarantee"
    backgroundImg="solar-panel.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn more" 
    />
    <Section
    title="Solar For New Roofs"
    description="Solar Roof costs less than a new roof plus solar panels"
    backgroundImg="solar-roof.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn more" 
    />
    <Section
    title="Accessories"
    description=""
    backgroundImg="accessories.jpg"
    leftBtnText="Order Now"
    />
    {/* <Section />
    <Section />
    <Section /> */}
  </Container>
    );
};


const Container = styled.div`
  height: 100vh;
  
`;


export default Home;
