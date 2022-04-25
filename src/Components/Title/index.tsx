import React from "react";
import "./styles.scss";

interface Props {
  padding?: string;
  fontSize?: string;
  className?: string;
}

function Title({ children, padding, fontSize, className }: React.PropsWithChildren<Props>) {
  return (
    <div style={{ fontSize, padding }} className={"title " + className}>
      {children}
    </div>
  );
}

export default Title;
