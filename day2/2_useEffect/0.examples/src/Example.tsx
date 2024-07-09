import { useState, useEffect } from "react";

function Example() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  
  useEffect(() => {
    console.log("🎯 Use Effect run without dependencies array");
    return () => {
      console.log("🗑️ Use Effect cleanup run without dependencies array");
    }
  })

  useEffect(() => {
    console.log("🎯🎯 Use Effect run with empty dependencies array");
    return () => {
      console.log("🗑️🗑️ Use Effect cleanup run with empty dependencies array");
    }
  }, [])

  useEffect(() => {
    console.log("🎯🎯🎯 Use Effect run with only count1 in the dependencies array");
    return () => {
      console.log("🗑️🗑️🗑️ Use Effect cleanup run with only count1 in the dependencies array");
    }
  }, [count1])

  
  useEffect(() => {
    console.log("🎯🎯🎯🎯 Use Effect run with count1 and count2 in the dependencies array");
    return () => {
      console.log("🗑️🗑️🗑️🗑️ Use Effect cleanup run with count1 and count2 in the dependencies array");
    }
  }, [count1, count2])


  return (
    <>
      <button onClick={() => setCount1(count1 + 1)}>count1: { count1 }</button>
      <button onClick={() => setCount2(count2 + 1)}>count2: { count2 }</button>
      <button onClick={() => setCount3(count3 + 1)}>count3: { count3 }</button>
    </>
  );
}

export default Example;
