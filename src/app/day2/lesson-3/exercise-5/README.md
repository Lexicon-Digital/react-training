# Exercise 2 - Notes App - Other States

### Exercise

We've solved flashing content, but we've been walking the happy path the whole time, what are we going to do when things go wrong? What happens in our app if the API never returns
a valid response, go ahead and try it, see what happens (you can actually see it in the [exercise page](http://localhost:3000/day2/lesson-3/exercise-5).

Hmm.... that's not great, it just keeps on spinning around forever, even though the console is showing a bunch of nasty errors. We probably need to handle it with an error state.

That's your job for this exercise, to add error states in to the API, they don't need to be fancy, but you will need to make the component yourself. You can show the 
error in any format you like.

💡 You should be able to inspect the response and figure it out if it worked from there

#### Answer

<details>
    <summary> Read this when you've had a crack </summary>

You can see a solution in the ```answer/``` folder for this exercise and you can access the answer at [answer](http://localhost:3000/day2/lesson-3/exercise-5/answer)


#### But what is actually happening

So visually it looks better, at least the user knows that something is loading and won't be shocked when more content appears on the screen, but it still isn't perfect..ah well. 
You've probably seen (but maybe not noticed) that many websites use skeleton content to serve as a placeholder. This skeleton content holds roughly the same size and shape as the expected
actual content, which means your page won't be bouncing over the screen. 

A good example of this is youtube, which uses grey boxes to represent where the elements will load

![youtube](../../../../../img/youtube.png)

We won't go through this right now, but you can look in to how you add it if you wanted to, it will require some decent level understanding of CSS which we arent really covering.

There is no real right or wrong way to break out your components in to a specific folder structure, some people like to try their best to keep the components as close to where they are used as possible,
others may try to group by domain, others may break them in to pages/ components/ folders and go from there. 

There is also no 100% agreed upon way on how to actually break down your components in to composable elements, you could go to the nth degree and have single line components where you
basically see no HTML at all. Just like your back end code, there are arguments to be made for both sides.
</details>




