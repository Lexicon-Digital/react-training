import React from "react";

export const AuthenticationGuard = ({
  component: Component,
}: {
  component: React.ComponentType;
}) => {
  return <Component />;
};
