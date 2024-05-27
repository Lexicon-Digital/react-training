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

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-2/exercise-1/answer-1)


#### But what is actually happening

We won't get to deep in to how React renders content in this exercise, but in essence React is smart enough to know that something has changed.
That's what the ```useState()``` hook is checking for.

Because the state has changed, the component (and all of its children) will re-render, but this time
they wont re-render with 0 as the current value for upvote and downVote, they will re-render with the value that the user last left them at. Declarative programming at play!

You can read the excellent [official react docs](https://react.dev/learn/state-a-components-memory) and more about how [state causes page renders](https://react.dev/learn/render-and-commit)
</details>



