useState is useful to keep track of changeable data between renders that is specific for the component (or a child component)

The useState Hook has an optional prop which is the initial value to be held in state.
The return value of the useState Hook is a tuple (array of 2 values).
The first value is the current value of the state (during that render).
The second value is a function that can be called to update the value of the state (for the next render).

```ts
const state = useState("initial value");​
const value = state[0];​
const setValue = state[1];​
```

The preferred way of accessing the state value and function is to destructure the returned tuple.
```ts
const [value, setValue] = useState("initial value"); // using array destructuring​
```

You can name the value and setter function anything you want but the best practice is the name the setter function the same as the value but with the `set` prefix.
```ts
const [value, setValue] = useState("initial value");
const [count, setCount] = useState(0);
const [car, setCar] = useState<Car>({ make: "Nissan", model: "Skyline", colour: "Silver", });
```

To update the state, call the setter function with either the new value you want as the prop, or a function which returns the new value.
```ts
setCount(1);
setCount(count + 1);
setCount((currentCount) => currentCount + 1);
```