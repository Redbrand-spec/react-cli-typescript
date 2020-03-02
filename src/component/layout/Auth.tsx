import React from "react";

const AuthLayout: React.FC<React.ReactNode> = ({ children }): JSX.Element => {
  return (
    <>
      <div style={{ width: "100%" }}>{children}</div>
    </>
  );
};

export default AuthLayout;
