import React from "react";

const defaultProp = {
  innerValue: "Hello World" as number | string,
};
type NewComponentProps = typeof defaultProp;

const NewComponent = ({ innerValue }: NewComponentProps) => <p>{innerValue}+1111</p>;
NewComponent.defaultProps = defaultProp;

export default NewComponent;
