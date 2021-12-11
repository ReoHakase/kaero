import React from "react";

const Button: React.FC<{
  handler: () => void;
}> = (props) => {
  return <div>{props.children}</div>;
};

export default Button;
