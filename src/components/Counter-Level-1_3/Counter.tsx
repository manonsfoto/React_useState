import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <section className="flex section_counter">
      <div className="flex counter_box">
        <button onClick={() => setCounter(counter + 1)}>➕</button>
        <p>{counter}</p>
        <button onClick={() => setCounter(counter > 0 ? counter - 1 : 0)}>
          ➖
        </button>
      </div>
      <button onClick={() => setCounter(0)}>Reset</button>
    </section>
  );
};

export default Counter;
