import React from "react";

export const AuthenticationGuard = ({
  component: Component,
  ...props
}: {
  component: React.ComponentType;
}) => {
  return <Component {...props} />;
};
