import React from "react";
import { Button } from "../ui/button";

const ButtonScn = ({ variant, children, ...props }) => {
  return (
    <>
      <Button variant={variant} {...props}>
        {children}
      </Button>
    </>
  );
};

export default ButtonScn;
