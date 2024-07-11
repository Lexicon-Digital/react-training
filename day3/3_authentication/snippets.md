In main.tsx import Auth0Provider
```ts
import { Auth0Provider } from "@auth0/auth0-react";
```

add to render function, wrapping RouterProvider

```ts
 <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation="localstorage"
  >
    <RouterProvider router={router} />
  </Auth0Provider>
  ```


Note the domain and clientId variables are already setup from import.meta.env.VITE_AUTH_*** This is another pattern that we have to access environment variables. These are compiled into the code at build time.



In day3\3_authentication\0.start\src\components\AuthenticationGuard.tsx we will need to create a component which wraps the passed in component in the withAuthenticationGuard HOC (higher-order-component) and then renders it.

```ts
import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

export const AuthenticationGuard = ({
  component,
  ...props
}: {
  component: React.ComponentType;
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div className="page-layout">Loading...</div>,
  });

  return <Component {...props} />;
};
```


In day3\3_authentication\0.start\src\components\HeaderUser.tsx we will need to import useAuth0

```ts
import { withAuthenticationRequired } from "@auth0/auth0-react";
```

then we can consume that hook

```ts
// Delete this:
const user = { name: null };
const isLoading = true;
const isAuthenticated = false;
// Add this instead:
const { user, isAuthenticated, isLoading } = useAuth0();
```

Here we can see whether auth0 is still loading, whether they are authenticated, and their details. 
> Note: this is specific to Auth0's React plugin, Okta may have a different implementation.


Have a look in
day3\3_authentication\0.start\src\components\CreateNote.tsx
day3\3_authentication\0.start\src\components\LoginButton.tsx
day3\3_authentication\0.start\src\components\LogoutButton.tsx

These also consume different options from the useAuth0 hook.

Finally, have a look in day3\3_authentication\0.start\src\components\Profile.tsx
Here we will look at getting an access token from Auth0 to then pass to an API.
The relevant function from useAuth0 hook is getAccessTokenSilently (again note that Okta will be different).
We can then pass the accessToken as a Bearer token in the Authorization header.

```ts
try {
    const accessToken = await getAccessTokenSilently();
    setAccessToken(accessToken);

    await fetch("https://intro-lemon.vercel.app/api/posts", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
} catch (e) {
    console.log((e as Error).message);
}
```