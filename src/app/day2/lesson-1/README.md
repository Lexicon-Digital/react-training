# Hooks, what are they?

Fundamentally hooks are just a function, it is the rules that are applied to their use that define them as a "hook". There are many conventions that we will go through but for now you can think of them
as just being functions that start with the keyword **use** 

for example, you could create your own hook, that returns an object like so

```typescript jsx
// MyCustomHook.tsx
const useMyCustomHook = () => {
  // No implementation details for now...
}
```

then use it in your component like so

```typescript jsx
// MyComponent.tsx
const MyComponent = () => {
    const myHooksReturnedValue = useMyCustomHook()
    return <div>
            My hook returned the following value {myHooksReturnedValue}
        </div>
    
}
```

## The default React Hooks

[Official Documentation](https://react.dev/reference/react/hooks)

React has many built in hooks that make using react easier, some you will use a lot, and some, you might never use, a few of the most commonly used hooks are listed below, in a rough order of prevalence, with links to the official documentation

#### [useState](https://react.dev/reference/react/hooks#state-hooks)
```typescript jsx
const [myState, setMyState] = useState(1)
```

#### [useEffect](https://react.dev/reference/react/hooks#effect-hooks)
```typescript jsx
useEffect(() => {
    // No implementation details for now
}, [])
```

#### [useContext](https://react.dev/reference/react/hooks#context-hooks)

```typescript jsx
const myContext = useContext(SomeContext)
```

#### [useRef](https://react.dev/reference/react/hooks#ref-hooks)

```typescript jsx
const domReference = useRef(null)
```

---
**NOTE**

There are other hooks, which we will not cover. They are used for more niche situations, often to do with performance improvements.

[useMemo](https://react.dev/reference/react/useMemo)

[useCallback](https://react.dev/reference/react/useCallback)

[useTransition](https://react.dev/reference/react/useTransition)

[useDeferredValue](https://react.dev/reference/react/useDeferredValue)

[useLayoutEffect](https://react.dev/reference/react/useLayoutEffect)

[useInsertionEffect](https://react.dev/reference/react/useInsertionEffect)

---