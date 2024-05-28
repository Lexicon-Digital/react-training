# Exercise 2 - Notes App

### Exercise

When you open the exercise and load from the API, you will notice an error in the console, can you resolve it?
#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-3/exercise-2/answer)


#### But what is actually happening

When you render a list of items in react, if you don't pass a _key_ property, then you will get a lot of errors in the console warning you to add the key property. But why? The page seems to work fine, so whats the big deal?

Well in our contrived example, it doesn't matter, but sometimes it is [very important](https://react.dev/learn/rendering-lists). 

The key is a unique identifier for each rendered component, and it should always uniquely identify data, ideally the data itself will have a key, if it does not you can generate one based off the data itself or an incrementing UUID.

The key is useful because under the hood, react will minimise the amount of re-rendering required when it can match up what was in the previous render based on its key.
</details>




