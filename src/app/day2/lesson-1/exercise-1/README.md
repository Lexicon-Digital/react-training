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

We won't get to deep in to how React renders content in this exercise, but in essence React is smart enough to know that something has changed.
That's what the ```useState()``` hook is checking for. 

Because the state has changed, the component (and all of its children) will re-render, but this time
they wont re-render with 0 as the current value for upvote and downVote, they will re-render with the value that the user last left them at. Declarative programming at play!

YOu can read the excellent [official react docs](https://react.dev/learn/state-a-components-memory) and more about how [state causes page renders](https://react.dev/learn/render-and-commit)
</details>

