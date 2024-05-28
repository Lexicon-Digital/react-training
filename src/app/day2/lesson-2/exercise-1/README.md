# Exercise 1 - useEffect

The code found in [page.tsx](page.tsx) illustrates how the useEffect hook can be used

You can access the [page](http://localhost:3000/day2/lesson-2/exercise-1) and have a play around with it to see what happens.

### Exercise

You will probably notice immediately that this page takes a long time to load, and you just see nothing while its loading. Not a great experience really is it, we might have heaps of
fun stuff on the page we can show users independently of some long loading process. And then when you go to increment the counter, it just flat out doesn't work, the whole thing is pretty broken.

Well your job is to use the useEffect hook to make the user not have to wait ages for the page to load before seeing anything. Fair warning, this might be a bit tricky if you don't have
a great grasp on async/await style programming.

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


#### But can't I just do things in the render stage?

Yes, you can, and if your API was really quick, you could probably get away with it too.

The reality is that when and when not to use useEffect is a bit tricky, it used to be used a lot more, now people don't use it as much. The [documentation](https://react.dev/learn/synchronizing-with-effects) provided by the react team is extensive,
they even have a whole section on [when not to use useEffect](https://react.dev/learn/you-might-not-need-an-effect). These days we have
</details>




