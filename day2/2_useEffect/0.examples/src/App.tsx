import { useState } from "react";
import Example from "./Example";
import "./app.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>useEffect examples</h1>
      <div>Look through the code in Example.tsx, paying attention to the dependencies array prop of useEffect</div>
      <div>View the results in the Chrome devtools console</div>
      <button onClick={() => setCount(count + 1)}>Force reset example</button>
      <Example key={count} />
      <div>
        Expected outputs:
        <ul>
          <li>Page first loads: 🎯, 🎯🎯, 🎯🎯🎯, 🎯🎯🎯🎯</li>
          <li>count3 clicked: 🗑️, 🎯</li>
          <li>count2 clicked: 🗑️, 🗑️🗑️🗑️🗑️, 🎯, 🎯🎯🎯🎯</li>
          <li>count1 clicked: 🗑️, 🗑️🗑️🗑️, 🗑️🗑️🗑️🗑️, 🎯, 🎯🎯🎯, 🎯🎯🎯🎯</li>
          <li>Force reset clicked: 🗑️, 🗑️🗑️, 🗑️🗑️🗑️, 🗑️🗑️🗑️🗑️, 🎯, 🎯🎯, 🎯🎯🎯, 🎯🎯🎯🎯</li>
        </ul>
      </div>
    </>
  );
}

export default App;
