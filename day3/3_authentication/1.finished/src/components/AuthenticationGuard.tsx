import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton";

export const AuthenticationGuard = ({
  component,
  ...props
}: {
  component: React.ComponentType;
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div className="page-layout">Loading auth...</div>,
  });

  return <Component {...props} />;
};


// Alternative

export const AuthenticationGuardAlternative = ({ component: Component, ...props }: { component: React.ComponentType}) => {
  const { isLoading, isAuthenticated } = useAuth0();
  if (isLoading) {
    return <div>Loading auth...</div>
  }
  if (isAuthenticated) {
    return <Component {...props} />
  }
  return <div>
    Please login: <LoginButton />
  </div>
}