import React from "react";
import styled from "styled-components";

const Icon = ({ id, size, strokeWidth = 1, ...delegated }) => {
  // const Component = icons[id];

  // if (!Component) {
  //   throw new Error(`No icon found for ID: $id`);
  // }

  return (
    <Wrapper style={{}}>{/* <Component size={size}> </Component> */}</Wrapper>
  );
};

const Wrapper = styled.span`
  display: inline-block;
  width: var(--size);
  height: var(--size);
`;
