# Exercise 1 - State

The code found in [page.tsx](page.tsx) illustrates how the useState hook can be used in react to manage state with a simple counter.
When you click it, the count will increase. When you refresh the page, the count will be set back to 0.

You can access the [page](http://localhost:3000/day2/lesson-1/exercise-1) and have a play around with it to see what happens.

### Exercise

Your task is to add a second arrow, which keeps track of downvotes that a user has made. The arrow can be anywhere on the page, but should
also have a corresponding counter which shows how many down votes have been made also.

You can use the class ```downArrow``` on the arrow, to make it face downwards

#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-1/exercise-1/answer-1)


#### But what is actually happening

To understand this, we will want to refresh on [how react renders things](https://react.dev/learn/render-and-commit).

First a render is triggered, either for the first time when a page loads, or based on some logic to show, or re-render a component

Then the component is actually rendered, under the hood react will be doing something like

```typescript jsx
import { createRoot } from 'react-dom/client';
const root = createRoot(document.getElementById('root'))
root.render(<MyRootComponent />);
```

Then react will commit changes to the DOM, it will do this by making the minimal necessary changes between the last DOM and the output of the render

With the above in mind, you can maybe see that all your code will be running in the render phase, and since you added a really slow API call, the whole phase will take a long time. So we want to move it away
and in to somewhere else.

That's where `useEffect` comes in, which runs AFTER all of this has happened, which will trigger another re-render, but will be very selective about what it needs to change.
</details>

