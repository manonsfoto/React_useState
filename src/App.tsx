import "./App.css";
import Counter from "./components/Counter-Level-1_3/Counter";
import DayNightSwitch from "./components/Day-Night-Change-Level-2_2/DayNightSwitch";
import FAQ2 from "./components/Faq-2 Level-1_2/FAQ2";
import FAQ from "./components/Faq-Level-1_1/FAQ";
import Input from "./components/Input-Level-1_6/Input";

function App() {
  return (
    <>
      <h3>1. React-useState-Faq-Level-1_1</h3>
      <FAQ />
      <hr />
      <h3>2. React-Counter-Level-1_3</h3>
      <Counter />
      <hr />
      <h3>3. React-useState-Input-Level-1_6</h3>
      <Input />
      <hr />
      <h3>4. React-useState-Day-Night-Change-Level-2_2</h3>
      <DayNightSwitch />
      <hr />
      <h3>5. BONUS React-useState-Faq-2 Level-1_2</h3>
      <FAQ2 />
    </>
  );
}

export default App;
