# The useEffect Hook

[Official Documentation](https://react.dev/reference/react/hooks#state-hooks)

The useEffect hook is probably the second most commonly seen hook. The useEffect hook is used most commonly to "connect and synchronize with external systems"

This could be an external API, could be the DOM, or many other different things.

One very common paradigm you will see with useEffect is to trigger an _effect_ when a component renders to load, from an external store, some data for the component. This needs to happen _after_ the component has been rendered because we don't want to block rendering if our call is very slow.
The call may be relatively inconsequential to the page, e.g. data for the 4th slide in a carousel, so we really only want to load it once the page is already initially loaded.